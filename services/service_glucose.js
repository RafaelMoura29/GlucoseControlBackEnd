const mongoose = require("mongoose");
const Paciente = mongoose.model("Paciente");

module.exports = {
  create_glucose(req, res) {
    const { _idPaciente, ...glucose } = req.body
    Paciente.findOne({ _id: String(_idPaciente) })
      .then((paciente) => {
        paciente.glucose.push(glucose)
        paciente.save()
          .then((response) => res.send(response.glucose))
          .catch((error) => res.send("Ocorreu um erro ao tentar salvar o paciente"))
      })
      .catch((error) => res.send("Paciente não encontrado"))
  },
}
