const mongoose = require("mongoose")
const Usuario = mongoose.model('Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
//const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

module.exports = {
  async register(req, res) {
    const { email, nome, senha, unidade, perfil } = req.body

    if (senha.length <= 8) {
      return res.status(406).send("Password length is not accepted.")
    }

    const doesUserExist = await Usuario.find({ email })
    if (doesUserExist.length > 0) {
      return res.status(406).send("O e-mail já está sendo utilizado")
    }

    const cyptedPassword = bcrypt.hashSync(senha, 8)
    const newUser = new Usuario({ email, nome, senha: cyptedPassword, unidade, perfil })

    newUser.save()
      .then((response) => {
        return res.status(201).send(response)
      })
      .catch((error) => {
        return res.status(400).send(error)
      })
  },

  async login(req, res) {
    const { email, senha } = req.body

    const user = await Usuario.find({ email })
    if (user.length <= 0) {
      return res.status(406).send("E-mail e ou senha inválidos")
    }

    const doesPasswordMatch = await bcrypt.compare(senha, user[0].senha);
    if (!doesPasswordMatch) {
      return res.status(406).send("E-mail e ou senha inválidos")
    }

    var token = jwt.sign({ userId: user[0]._id }, process.env.KEY);

    return res.status(201).send({ isUserAuthenticated: true, token })
  },

  async checkToken(req, res, next) {
    const { token } = req.headers

    if (!token) {
      return res.status(401).send({ auth: false, message: 'No token provided.' })
    }

    jwt.verify(token, process.env.KEY, (err, decoded) => {
      if (err) {
        return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
      }
      next()
    })
  },

  async recoverPassword(req, res) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'glycon4@gmail.com',
        pass: 'glyconEmail123'
      }
    })

    const mailOptions = {
      from: 'glycon4@gmail.com',
      to: req.body.email,
      subject: 'Testando suporte glycon',
      text: 'Funcionou!'
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.status(201).send({ error })
      } else {
        return res.status(201).send({ info })
      }
    })
  }

}