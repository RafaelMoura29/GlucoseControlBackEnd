const GlicemiaSchema = {
    dataHoraColeta: {
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
    ultimaAlimentacao: {
        type: Number,
        required: true
    },
    createDate: {
        type: Date,
        required: true
    },
    updateDate: {
        type: Date,
        default: Date.now
    },
}
