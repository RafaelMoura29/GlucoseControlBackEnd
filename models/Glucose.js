const mongoose = require("mongoose");

const GlucoseSchema = new mongoose.Schema({
  prontuario: {
    type: String,
    required: false
  },
  paciente: {
    type: String,
    required: false
  },
  dataColeta: {
    type: String,
    required: false
  },
  valorGlicemia: {
    type: String,
    required: false
  },
  tipo: {
    type: String,
    required: false
  },
  tipoAlimentacao: {
    type: String,
    required: false
  },
  hora: {
    type: String,
    required: false
  },
  horaColeta: {
    type: String,
    required: false
  },
  observacoes: {
    type: String,
    required: false
  },
},
  { collection: 'Glucose' }
);

mongoose.model("Glucose", GlucoseSchema);
