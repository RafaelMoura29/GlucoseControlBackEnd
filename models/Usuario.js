const mongoose = require("mongoose")

const UsuarioSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  unidade: {
    type: String,
    required: true
  },
  perfil: {
    type: String,
    required: true
  },
  createDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('Usuario', UsuarioSchema)
