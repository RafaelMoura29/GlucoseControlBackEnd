const mongoose = require("mongoose");

const LeitoSchema = new mongoose.Schema({
  NomeLeito: {
    type: String,
    required: false
  },
  codigoPaciente: {
    type: String,
    required: false
  },
  codigoUnidade: {
    type: String,
    required: false
  },
  NomePaciente: {
    type: String,
    required: false
  },
},
  { collection: 'Leitos' }
);

module.exports = mongoose.model("Leito", LeitoSchema);


