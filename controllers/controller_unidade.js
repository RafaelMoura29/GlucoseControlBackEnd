const mongoose = require("mongoose");

const Unidade = mongoose.model("Unidade");
 
module.exports = {
    async create_unidade(req, res) {
        const unidade = await Unidade.create({ Codigo: req.body.codigo, 
                                               Nome: req.body.nome, 
                                               Senha: req.body.senha });
        return res.send({passed: true,});
    },
    async get_unidade(req, res){
        const unidades = await Unidade.find();
        res.send({passed: unidades,});
    }
}