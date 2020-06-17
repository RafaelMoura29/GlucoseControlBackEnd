const mongoose = require("mongoose")
const Usuario = mongoose.model('Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

module.exports = {
  async register(req, res) {
    const { email, password, confirmPassword, username } = req.body

    if (password !== confirmPassword) {
      return res.status(406).send("Password and confirm password are not equal.")
    } else if (password.length <= 8) {
      return res.status(406).send("Password length is not accepted.")
    } else if (username.length <= 8) {
      return res.status(406).send("Username length is not accepted")
    }

    const doesUserExist = await Usuario.find({ $or: [{ email }, { username }] })
    if (doesUserExist.length > 0) {
      if (doesUserExist[0].email === email) {
        return res.status(406).send("The e-mail is already being used.")
      } else {
        return res.status(406).send("The username is already being used.")
      }
    }

    const cyptedPassword = bcrypt.hashSync(password, 8)
    const newUser = new Usuario({ email, username, password: cyptedPassword })

    newUser.save()
      .then((response) => {
        return res.status(201).send(response)
      })
      .catch((error) => {
        return res.status(400).send(error)
      })
  },

  async login(req, res) {
    const { email, password } = req.body

    const user = await Usuario.find({ email })
    if (user.length <= 0) {
      return res.status(406).send("email is not registered.")
    }

    const doesPasswordMatch = await bcrypt.compare(password, user[0].password);
    if (!doesPasswordMatch) {
      return res.status(406).send("The password does not match.")
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
  }

}