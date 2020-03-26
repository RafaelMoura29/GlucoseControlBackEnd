const mongoose = require("mongoose");

const PacienteSchema = new mongoose.Schema({
  Prontuario: {
    type: String,
    required: false
  },
  Nome: {
    type: String,
    required: false
  },
  Idade: {
    type: String,
    required: false
  },
  Sexo: {
    type: String,
    required: false
  },
},
  { collection: 'Pacientes' }
);

mongoose.model("Paciente", PacienteSchema);
