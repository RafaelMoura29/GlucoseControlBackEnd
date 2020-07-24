const mongoose = require('mongoose')
const Paciente = mongoose.model('Paciente')

module.exports = {
  salvarPaciente(req, res) {
    let novoPaciente = new Paciente(req.body)
    novoPaciente
      .save()
      .then((paciente) => res.send(paciente))
      .catch((error) => res.send({ error }))
  },

  listarPacientes(req, res) {
    Paciente.find(req.query.tagId ? { _id: req.query.tagId } : {})
      .then((paciente) => {
        return res.send({ paciente })
      })
      .catch((error) => {
        return res.send({ error })
      })
  },

  atualizarPaciente(req, res) {
    Paciente.findOneAndUpdate({ _id: req.body._id }, req.body.dataUpdated)
      .then((paciente) => {
        return res.send({ paciente })
      })
      .catch((error) => {
        return res.send({ error })
      })
  }
}
