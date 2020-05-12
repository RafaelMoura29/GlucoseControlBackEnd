const mongoose = require("mongoose")

const AplicacaoSchema = new mongoose.Schema({
  prontuario: {
    type: String,
    required: false
  },
  paciente: {
    type: String,
    required: false
  },
  dataAplicacao: {
    type: String,
    required: false
  },
  horaAplicacao: {
    type: String,
    required: false
  },
  tipoAplicacao: {
    type: String,
    required: false
  },
  viaAdministracao: {
    type: String,
    required: false
  },
  droga: {
    type: String,
    required: false
  },
  posologia: {
    type: String,
    required: false
  },
  observacoes: {
    type: String,
    required: false
  },
  _idPaciente: {
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
  }
},
  { collection: 'Aplicacao' }
)

mongoose.model("Aplicacao", AplicacaoSchema)