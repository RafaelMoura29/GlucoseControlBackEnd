const mongoose = require("mongoose");
const Paciente = mongoose.model("Paciente");

module.exports = {
  salvarGlicemia(req, res) {
    const { _idPaciente, ...glicemia } = req.body
    Paciente.findOne({ _id: String(_idPaciente) })
      .then((paciente) => {
        paciente.glicemia.push(glicemia)
        paciente.save()
          .then((response) => res.send(response.glicemia))
          .catch((error) => res.send(error))
      })
      .catch((error) => res.send(error))
  },
}
