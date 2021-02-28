const AplicacaoSchema = { 
  dataHoraAplicacao: {
    type: Date,
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
    type: Number,
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
  }
}
