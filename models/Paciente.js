const mongoose = require('mongoose')
const GlicemiaSchema = require('./Glicemia')
const AplicacaoSchema = require('./Aplicação')

const PacienteSchema = new mongoose.Schema(
  {
    prontuario: { 
      type: String,
      required: true
    },
    nome: {
      type: String,
      required: true
    },
    dataNascimento: {
      type: Date,
      required: true
    },
    sexo: {
      type: String,
      required: true
    },
    peso: {
      type: Number,
      required: true
    },
    altura: {
      type: Number,
      required: true
    },
    imc: {
      type: Number,
      required: true
    },
    dataHoraInternacao: {
      type: Date,
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
      type: Date,
      required: true
    },
    updateDate: {
      type: Date,
      default: Date.now
    },
    glicemia: [GlicemiaSchema],
    aplicacao: [AplicacaoSchema]
  },
  { collection: 'Paciente' }
)

mongoose.model('Paciente', PacienteSchema)
