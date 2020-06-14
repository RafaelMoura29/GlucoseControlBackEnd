import mongoose from 'mongoose'

const UsuarioSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

mongoose.model('Usuario', UsuarioSchema)