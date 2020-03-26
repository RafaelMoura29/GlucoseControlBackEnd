const mongoose = require("mongoose");

const UnidadeSchema = new mongoose.Schema({
    Codigo: {
    type: String,
    required: false
  },
  Nome: {
    type: String,
    required: false
  },
  Senha: {
    type: String,
    required: false
  },
},
{ collection: 'Unidades' }
);

mongoose.model("Unidade", UnidadeSchema);
