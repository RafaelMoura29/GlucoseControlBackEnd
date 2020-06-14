const express = require('express')
const routes = express.Router()

/* Paciente  */
const paciente = require('./services/service_paciente')
routes.post('/paciente', paciente.create_paciente)
routes.get('/paciente', paciente.list_paciente)
routes.put('/paciente', paciente.update_paciente)

/* glicemia */
const glicemia = require('./services/service_glicemia')
routes.post('/glicemia', glicemia.create_glicemia)

/* Aplicação */
const aplicacao = require('./services/service_aplicacao')
routes.post('/aplicacao', aplicacao.create_aplicacao)

const usuario = require('./services/service_authentication')
routes.post('/register', usuario.register)

routes.get('/', (req, res) => {
    res.sendfile('./views/index.html')
});

module.exports = routes;