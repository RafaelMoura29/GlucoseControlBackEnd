const mongoose = require("mongoose");

const PacienteSchema = new mongoose.Schema({
  prontuario: {
    type: String,
    required: false,
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
  },
  estadoPaciente: {
    type: String,
    required: false
  },
  planoAplicacao: {
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
  peso: {
    type: String,
    required: false
  },
  altura: {
    type: String,
    required: false
  },
  instabilidadeHemodinamica: {
    type: String,
    required: false
  },
  imc: {
    type: String,
    required: false
  }
},
  { collection: 'Paciente' }
);

mongoose.model("Paciente", PacienteSchema);
