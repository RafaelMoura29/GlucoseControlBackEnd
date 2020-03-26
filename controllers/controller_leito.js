const mongoose = require("mongoose");

const Leito = mongoose.model("Leito");
 
module.exports = {
    async create_leito(req, res) {
        const leito = await Leito.create({ NomeLeito: req.body.nomeLeito, codigoPaciente: req.body.codigoPaciente, codigoUnidade: req.body.codigoUnidade, NomePaciente: req.body.nomePaciente });
        res.send({passed: true,});
    },
    async get_leito(req, res) {
        const Leitos = await Leito.find();
        res.send({passed: Leitos,});
    },
}