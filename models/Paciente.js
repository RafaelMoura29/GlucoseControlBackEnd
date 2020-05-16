const mongoose = require("mongoose");

const GlucoseSchema = {
  dataColeta: {
    type: String,
    required: false
  },
  horaColeta: {
    type: String,
    required: false
  },
  tipoColeta: {
    type: String,
    required: false
  },
  tipoAlimentacao: {
    type: String,
    required: false
  },
  valorGlicemia: {
    type: String,
    required: false
  },
  observacoes: {
    type: String,
    required: false
  },
  createDate: {
    type: String,
    required: false
  }
}

const AplicacaoSchema = {
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
  createDate: {
    type: String,
    required: false
  }
}

const PacienteSchema = new mongoose.Schema({
  prontuario: {
    type: String,
    required: false,
  },
  nome: {
    type: String,
    required: false
  },
  dataNascimento: {
    type: String,
    required: false
  },
  sexo: {
    type: String,
    required: false
  },
  peso: {
    type: String,
    required: false
  },
  altura: {
    type: String,
    required: false
  },
  imc: {
    type: String,
    required: false
  },
  dataInternacao: {
    type: String,
    required: false
  },
  horaInternacao: {
    type: String,
    required: false
  },
  tipoInternacao: {
    type: String,
    required: false
  },
  diabetes: {
    type: String,
    required: false
  },
  insuficienciaRenal: {
    type: String,
    required: false
  },
  corticoide: {
    type: String,
    required: false
  },
  infeccao: {
    type: String,
    required: false
  },
  sindromeDescRespiratorio: {
    type: String,
    required: false
  },
  instabilidadeHemodinamica: {
    type: String,
    required: false
  },
  statusPaciente: {
    type: String,
    required: false
  },
  planoAplicacao: {
    type: String,
    required: false
  },
  observacoes: {
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
  },
  glucose: [GlucoseSchema],
  aplicacao: [AplicacaoSchema]
},
  { collection: 'Paciente' }
);

mongoose.model("Paciente", PacienteSchema);
