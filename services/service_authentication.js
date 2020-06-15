const mongoose = require("mongoose")
const Usuario = mongoose.model('Usuario')
const bcrypt = require('bcrypt')
//const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

module.exports = {
  async register(req, res) {
    const { password, confirmPassword, username } = req.body

    if (password !== confirmPassword) {
      return res.status(406).send("Password and confirm password are not equal.")
    } else if (password.length <= 8) {
      return res.status(406).send("Password length is not accepted.")
    } else if (username.length <= 8) {
      return res.status(406).send("Username length is not accepted")
    }

    const doesUserExist = await Usuario.find({ username })
    if (doesUserExist.length > 0) {
      return res.status(406).send("The username is already being used.")
    }

    const cyptedPassword = bcrypt.hashSync(password, 8)
    const newUser = new Usuario({ username, password: cyptedPassword })

    newUser.save()
      .then((response) => {
        return res.status(201).send(response)
      })
      .catch((error) => {
        return res.status(400).send(error)
      })
  }
  
}