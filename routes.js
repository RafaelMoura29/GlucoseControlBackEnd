const express = require('express')
const routes = express.Router()

const paciente = require('./services/service_paciente')
const glicemia = require('./services/service_glicemia')
const aplicacao = require('./services/service_aplicacao')
const usuario = require('./services/service_authentication')

/* Paciente  */
routes.post('/paciente', paciente.create_paciente)
routes.get('/paciente', paciente.list_paciente)
routes.put('/paciente', paciente.update_paciente)

/* glicemia */
routes.post('/glicemia', glicemia.create_glicemia)

/* Aplicação */
routes.post('/aplicacao', aplicacao.create_aplicacao)

routes.post('/register', usuario.register)
routes.post('/login', usuario.login)
routes.post('/recoverPassword', usuario.recoverPassword)

routes.get('/', (req, res) => {
    res.sendfile('./views/index.html')
})

module.exports = routes;