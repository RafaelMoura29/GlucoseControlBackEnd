const express = require('express');
const routes = express.Router();
const cors = require("cors")

/* Paciente  */
const paciente = require('./services/service_paciente')
routes.post('/paciente',cors(), paciente.create_paciente);
routes.get('/paciente',cors(), paciente.list_paciente);
routes.put('/paciente',cors(), paciente.update_paciente);

/* glicemia */
const glicemia = require('./services/service_glicemia')
routes.post('/glicemia',cors(), glicemia.create_glicemia);

/* Aplicação */
const aplicacao = require('./services/service_aplicacao')
routes.post('/aplicacao',cors(), aplicacao.create_aplicacao)

routes.get('/', (req, res) => {
    res.sendfile('./views/index.html')
});

module.exports = routes;