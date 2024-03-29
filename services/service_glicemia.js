const mongoose = require("mongoose");
const Paciente = mongoose.model("Paciente");

module.exports = {
    salvarGlicemia(req, res) {
        const { _idPaciente, diabetes, ...glicemia } = req.body
        Paciente.findOne({ _id: String(_idPaciente) })
            .then((paciente) => {
                paciente.glicemia.push(glicemia)
                paciente.updateDate = new Date()
                paciente.updateDate.setHours(paciente.updateDate.getHours() - 3);

                paciente.diabetes = diabetes
                paciente.save()
                    .then((response) => res.status(200).send(response.glicemia))
                    .catch((error) => res.status(400).send(error))
            })
            .catch((error) => res.status(400).send(error))
    },
}
