const mongoose = require("mongoose");

const Usuario = mongoose.model("Usuario");

module.exports = {
    async create_usuario(req, res) {
        const usuario = await Usuario.create({ Usuario: req.body.usuario, Senha: req.body.senha });
        res.send({ passed: true, });
    },

    async login_usuario(req, res) {
        const result = await Usuario.find({ Usuario: req.body.usuario, Senha: req.body.senha });
        res.send({ passed: result, });
    }
}