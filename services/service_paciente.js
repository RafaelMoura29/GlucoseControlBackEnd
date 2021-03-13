const mongoose = require('mongoose')
const Paciente = mongoose.model('Paciente')

module.exports = {
  salvarPaciente(req, res) {
    let novoPaciente = new Paciente(req.body)
    novoPaciente.updateDate = new Date()
    novoPaciente.updateDate.setHours(novoPaciente.updateDate.getHours() - 3);
    novoPaciente
      .save()
      .then((paciente) => res.status(201).send(paciente))
      .catch((error) => res.status(400).send({ error }))
  },

  listarPacientes(req, res) {
    Paciente.find(req.query.tagId ? { _id: req.query.tagId } : {})
      .then((paciente) => {
        return res.status(200).send({ paciente })
      })
      .catch((error) => {
        return res.status(400).send({ error })
      })
  },

  atualizarPaciente(req, res) {
    req.body.dataUpdated.updateDate = new Date()
    req.body.dataUpdated.updateDate.setHours(req.body.dataUpdated.updateDate.getHours() - 3);
    Paciente.findOneAndUpdate({ _id: req.body._id }, req.body.dataUpdated)
      .then((paciente) => {
        return res.status(200).send({ paciente })
      })
      .catch((error) => {
        return res.status(400).send({ error })
      })
  }
}
