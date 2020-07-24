const GlicemiaSchema = {
  dataColeta: {
    type: Date,
    required: true
  },
  horaColeta: {
    type: Date,
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
    default: Date.now,
  }
}
