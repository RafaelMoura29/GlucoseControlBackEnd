const mongoose = require("mongoose");

const Paciente = mongoose.model("Paciente");

module.exports = {
  create_paciente(req, res) {
    Paciente.create(req.body)
      .then((paciente) => {
        return res.send({ paciente });
      })
      .catch((error) => {
        return res.send({ error })
      })
  },

  list_paciente(req, res) {
    Paciente.find(req.query.tagId ? { "_id": req.query.tagId } : {})
      .then((paciente) => {
        return res.send({ paciente });
      })
      .catch((error) => {
        return res.send({ error })
      })
  },

  update_paciente(req, res) {
    Paciente.findOneAndUpdate({ "_id": req.body._id }, req.body.dataUpdated)
      .then((paciente) => {
        return res.send({ paciente });
      })
      .catch((error) => {
        return res.send({ error })
      })
  }
}