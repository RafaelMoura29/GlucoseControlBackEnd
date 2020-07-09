const mongoose = require('mongoose')
const Usuario = mongoose.model('Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
//const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

module.exports = {
  async register(req, res) {
    const { email, nome, senha, unidade, perfil } = req.body

    if (senha.length <= 8) {
      return res.status(406).send('Password length is not accepted.')
    }

    const doesUserExist = await Usuario.find({ email })
    if (doesUserExist.length > 0) {
      return res.status(406).send('O e-mail já está sendo utilizado')
    }

    const cyptedPassword = bcrypt.hashSync(senha, 8)
    const newUser = new Usuario({
      email,
      nome,
      senha: cyptedPassword,
      unidade,
      perfil
    })

    newUser
      .save()
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
      return res.status(406).send('E-mail e ou senha inválidos')
    }

    const doesPasswordMatch = await bcrypt.compare(senha, user[0].senha)
    if (!doesPasswordMatch) {
      return res.status(406).send('E-mail e ou senha inválidos')
    }

    var token = jwt.sign({ userId: user[0]._id }, process.env.KEY)

    return res.status(201).send({ isUserAuthenticated: true, token })
  },

  async checkToken(req, res, next) {
    const { token } = req.headers

    if (!token) {
      return res
        .status(401)
        .send({ auth: false, message: 'No token provided.' })
    }

    jwt.verify(token, process.env.KEY, (err, decoded) => {
      if (err) {
        return res
          .status(500)
          .send({ auth: false, message: 'Failed to authenticate token.' })
      }
      next()
    })
  },

  async recoverPassword({ body }, res) {
    const user = await Usuario.find({ email: body.email })

    if (user.length <= 0) {
      return res.status(406).send('O e-mail não está cadastrado')
    }

    var token = jwt.sign(
      {
        userId: user[0]._id,
        url: body.url
      },
      process.env.KEY
    )

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'glycon4@gmail.com',
        pass: 'glyconEmail123'
      }
    })

    const mailOptions = {
      from: 'glycon4@gmail.com',
      to: body.email,
      subject: 'GLYCON - Solucitação de mudança de senha.',
      text:
        'Acesse o link a seguir para realizar a mudança de senha: ' +
        body.url +
        '/' +
        token
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.status(201).send({ error })
      } else {
        return res.status(201).send({ info })
      }
    })
  },

  async changePassword({ body: { password, confirmPassword, token } }, res) {
    if (!token) {
      return res
        .status(401)
        .send({ auth: false, message: 'No token provided.' })
    }

    jwt.verify(token, process.env.KEY, (err, decoded) => {
      if (err) {
        return res
          .status(500)
          .send({ auth: false, message: 'Failed to authenticate token.' })
      }
      const { userId } = decoded
      if (password !== confirmPassword) {
        return res.status(406).send('As senhas não são iguais!')
      }

      const cyptedPassword = bcrypt.hashSync(password, 8)

      Usuario.findOneAndUpdate({ _id: userId }, { senha: cyptedPassword })
        .then((paciente) => {
          return res.status(200).send()
        })
        .catch((error) => {
          return res.send({ error })
        })
    })
  }
}
