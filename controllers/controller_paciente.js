const mongoose = require("mongoose");

const Paciente = mongoose.model("Paciente");
 
module.exports = {
    async create_paciente(req, res) {
        const paciente = await Paciente.create({ Prontuario: req.body.prontuario, Nome: req.body.nome, Idade: req.body.idade, Sexo: req.body.sexo });
        res.send({passed: true,});
    },
}