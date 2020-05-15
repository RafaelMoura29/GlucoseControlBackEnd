const mongoose = require("mongoose");

const GlucoseSchema = new mongoose.Schema({
  dataColeta: {
    type: String,
    required: false
  },
  horaColeta: {
    type: String,
    required: false
  },
  tipoColeta: {
    type: String,
    required: false
  },
  tipoAlimentacao: {
    type: String,
    required: false
  },
  valorGlicemia: {
    type: String,
    required: false
  },
  observacoes: {
    type: String,
    required: false
  },
  createDate: {
    type: String,
    required: false
  },
  updateDate: {
    type: String,
    required: false
  },
  _idPaciente:{
    type: String,
    required: false
  }
},
  { collection: 'Glucose' }
);

mongoose.model("Glucose", GlucoseSchema);
