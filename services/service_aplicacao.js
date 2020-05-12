const mongoose = require("mongoose")

const Aplicacao = mongoose.model("Aplicacao")

module.exports = {
  create_aplicacao(req, res) {
    Aplicacao.create(req.body)
      .then((aplicacao) => {
        return res.send({ aplicacao })
      })
  },

  list_aplicacao(req, res) {
    Aplicacao.find(req.query.tagId ? { "_idPaciente": req.query.tagId } : {})
      .then((aplicacoes) => {
        return res.send({ aplicacoes })
      })
      .catch((error) => {
        return res.send({ error })
      })
  }
}