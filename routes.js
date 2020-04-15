const express = require('express');
const routes = express.Router();

/* Paciente  */
const paciente = require('./services/service_paciente')
routes.post('/paciente', paciente.create_paciente);
routes.get('/paciente', paciente.list_paciente);
routes.put('/paciente', paciente.update_paciente);

/* Glucose */
const glucose = require('./services/service_glucose')
routes.post('/glucose', glucose.create_glucose);
routes.get('/glucose', glucose.list_glucose);

module.exports = routes;