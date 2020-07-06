const mongoose = require("mongoose")
const GlicemiaSchema = require('./Glicemia')
const AplicacaoSchema = require('./Aplicação')

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
    required: false
  },
  createDate: {
    type: String,
    required: true
  },
  updateDate: {
    type: String,
    required: true
  },
  glicemia: [GlicemiaSchema],
  aplicacao: [AplicacaoSchema]
},
  { collection: 'Paciente' }
);

mongoose.model("Paciente", PacienteSchema)
