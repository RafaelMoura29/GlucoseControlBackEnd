const express = require('express')
const routes = express.Router()

const paciente = require('./services/service_paciente')
const glicemia = require('./services/service_glicemia')
const aplicacao = require('./services/service_aplicacao')
const usuario = require('./services/service_authentication')

/* Paciente  */
routes.post('/paciente', usuario.checkToken, paciente.create_paciente)
routes.get('/paciente', usuario.checkToken, paciente.list_paciente)
routes.put('/paciente', usuario.checkToken, paciente.update_paciente)

/* glicemia */
routes.post('/glicemia', usuario.checkToken, glicemia.create_glicemia)

/* Aplicação */
routes.post('/aplicacao', usuario.checkToken, aplicacao.create_aplicacao)

routes.post('/register', usuario.register)
routes.post('/login', usuario.login)
routes.post('/recoverPassword', usuario.recoverPassword)

routes.get('/', (req, res) => {
    res.sendfile('./views/index.html')
})

module.exports = routes;