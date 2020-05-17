const mongoose = require("mongoose");

const GlucoseSchema = require('./Glucose')

const AplicacaoSchema = {
  dataAplicacao: {
    type: String,
    required: true
  },
  horaAplicacao: {
    type: String,
    required: true
  },
  tipoAplicacao: {
    type: String,
    required: true
  },
  viaAdministracao: {
    type: String,
    required: true
  },
  droga: {
    type: String,
    required: true
  },
  posologia: {
    type: String,
    required: true
  },
  observacoes: {
    type: String,
    required: true
  },
  createDate: {
    type: String,
    required: true
  },
  updateDate: {
    type: String,
    required: true
  }
}

const PacienteSchema = new mongoose.Schema({
  prontuario: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true
  },
  dataNascimento: {
    type: String,
    required: true
  },
  sexo: {
    type: String,
    required: true
  },
  peso: {
    type: String,
    required: true
  },
  altura: {
    type: String,
    required: true
  },
  imc: {
    type: String,
    required: true
  },
  dataInternacao: {
    type: String,
    required: true
  },
  horaInternacao: {
    type: String,
    required: true
  },
  tipoInternacao: {
    type: String,
    required: true
  },
  diabetes: {
    type: String,
    required: true
  },
  insuficienciaRenal: {
    type: String,
    required: true
  },
  corticoide: {
    type: String,
    required: true
  },
  infeccao: {
    type: String,
    required: true
  },
  sindromeDescRespiratorio: {
    type: String,
    required: true
  },
  instabilidadeHemodinamica: {
    type: String,
    required: true
  },
  statusPaciente: {
    type: String,
    required: true
  },
  planoAplicacao: {
    type: String,
    required: true
  },
  observacoes: {
    type: String,
    required: true
  },
  createDate: {
    type: String,
    required: true
  },
  updateDate: {
    type: String,
    required: true
  },
  glucose: [GlucoseSchema],
  aplicacao: [AplicacaoSchema]
},
  { collection: 'Paciente' }
);

mongoose.model("Paciente", PacienteSchema);
