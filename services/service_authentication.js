const mongoose = require("mongoose")
const Usuario = mongoose.model('Usuario')

module.exports = {
  register(req, res) {
    return res.send({"hello": "buddy"})
  }
}