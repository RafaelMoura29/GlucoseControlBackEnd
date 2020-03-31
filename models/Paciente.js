const mongoose = require("mongoose");

const PacienteSchema = new mongoose.Schema({
  prontuario: {
    type: String,
    required: false
  },
  nome: {
    type: String,
    required: false
  },
  dataNascimento: {
    type: String,
    required: false
  },
  tipoInternacao: {
    type: String,
    required: false
  },
  diabetes: {
    type: String,
    required: false
  },
  insuficienciaRenal: {
    type: String,
    required: false
  },
  corticoide: {
    type: String,
    required: false
  },
  infeccao: {
    type: String,
    required: false
  },
  sepse: {
    type: String,
    required: false
  },
  sindromeDesconfortoRespiratorio: {
    type: String,
    required: false
  },
  sexo: {
    type: String,
    required: false
  },
  dataHoraInternacao: {
    type: String,
    required: false
  },
  observacoes: {
    type: String,
    required: false
  }
},
  { collection: 'Pacientes' }
);

mongoose.model("Paciente", PacienteSchema);
