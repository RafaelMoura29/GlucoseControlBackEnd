const mongoose = require("mongoose");

const Paciente = mongoose.model("Paciente");
 
module.exports = {
    async create_paciente(req, res) {
        const paciente = await Paciente.create(req.body);
        res.send({passed: paciente,});
    },
    async list_paciente(req, res) {
        if(req.query.tagId){
            const paciente = await Paciente.find({"_id":req.query.tagId});
            return res.send({paciente}); 
        }
        const paciente = await Paciente.find();
        return res.send({paciente});
    },
}