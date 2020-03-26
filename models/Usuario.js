const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    Usuario: {
    type: String,
    required: false
  },
  Senha: {
    type: String,
    required: false
  },
},
{ collection: 'Usuarios' });

mongoose.model("Usuario", UsuarioSchema);
