const mongoose = require("mongoose");

const Paciente = mongoose.model("Paciente");
 
module.exports = {
    async create_paciente(req, res) {
        const paciente = await Paciente.create(req.body);
        res.send({passed: paciente,});
    },
    async list_paciente(req, res) {
        const paciente = await Paciente.find();
        res.send({passed: paciente,});
    },
}