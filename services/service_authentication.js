const mongoose = require("mongoose")
const Usuario = mongoose.model('Usuario')
//const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

module.exports = {
  register(req, res) {
    const { password, confirmPassword, username } = req.body

    if (password !== confirmPassword) {
      return res.status(406).send("Password and confirm password are not equal.")
    } else if (password.length <= 8) {
      return res.status(406).send("Password length is not accepted.")
    } else if (username.length <= 8) {
      return res.status(406).send("Username length is not accepted")
    }
    /* else if (format.test(password)) {
      return res.status(406).send("Password does not accept special characters.")
    }  */

    const newUser = new Usuario({ username, password })

    newUser.save()
      .then((response) => {
        return res.status(201).send(response)
      })
      .catch((error) => {
        return res.status(400).send(error)
      })

  }
}