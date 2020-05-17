const mongoose = require("mongoose")

const Paciente = mongoose.model("Paciente");

module.exports = {
  create_aplicacao(req, res) {
    const {_idPaciente, ...aplicacao } = req.body
    Paciente.findOne({ _id: String(_idPaciente)})
      .then((paciente) => {
        paciente.aplicacao.push(aplicacao)
        paciente.save()
          .then((response) => res.send(response.aplicacao))
          .catch((error) => res.send(error))
      })
      .catch((error) => res.send(error))
  },
}