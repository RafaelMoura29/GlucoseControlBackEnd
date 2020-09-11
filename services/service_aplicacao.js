const mongoose = require("mongoose")
const Paciente = mongoose.model("Paciente")

module.exports = {
  salvarAplicacao(req, res) {
    const {_idPaciente, ...aplicacao } = req.body
    Paciente.findOne({ _id: String(_idPaciente)})
      .then((paciente) => {
        paciente.aplicacao.push(aplicacao)
        paciente.markModified('anything')
        paciente.save()
          .then((response) => res.status(200).send(response.aplicacao))
          .catch((error) => res.status(400).send(error))
      })
      .catch((error) => res.status(400).send(error))
  },
}
