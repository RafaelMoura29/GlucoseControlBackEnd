const mongoose = require("mongoose");

const IndicadorEntradaSaidaSchema = new mongoose.Schema({
    DataEntrada: {
    type: String,
    required: false
  },
  HorarioEntrada: {
    type: String,
    required: false
  },
  DataSaida: {
    type: String,
    required: false
  },
  HorarioSaida: {
    type: String,
    required: false
  },
  Prontuario: {
    type: String,
    required: false
  },
  Tipo: {
    type: String,
    required: false
  },
},
{ collection: 'IndicadoresEntradaSaida' }
);

mongoose.model("IndicadorEntradaSaida", IndicadorEntradaSaidaSchema);
