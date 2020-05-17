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
          .catch((error) => res.send('Ocorreu um error ao salvar a nova aplicação'))
      })
      .catch((error) => res.send('Ocorreu um error ao encontrar o paciente'))
  },
}