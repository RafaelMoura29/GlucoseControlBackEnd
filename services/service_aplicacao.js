const mongoose = require("mongoose")

const Aplicacao = mongoose.model("Aplicacao")

module.exports = {
    create_aplicacao(req, res) {
        Aplicacao.create(req.body)
            .then((aplicacao) => {
                res.send({ aplicacao })
            })
    },

    list_aplicacao(req, res) {
        if (req.query.tagId) {
            Aplicacao.find({ "_idPaciente": req.query.tagId })
                .then((aplicacoes) => {
                    res.send({ aplicacoes })
                })
        }
        Aplicacao.find()
            .then((aplicacoes) => {
                res.send({ aplicacoes })
            })
    }
}