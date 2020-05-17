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