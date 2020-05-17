const GlucoseSchema = {
  dataColeta: {
    type: String,
    required: true
  },
  horaColeta: {
    type: String,
    required: true
  },
  tipoColeta: {
    type: String,
    required: true
  },
  tipoAlimentacao: {
    type: String,
    required: true
  },
  valorGlicemia: {
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