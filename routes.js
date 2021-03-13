const express = require('express')
const routes = express.Router()

const paciente = require('./services/service_paciente')
const glicemia = require('./services/service_glicemia')
const aplicacao = require('./services/service_aplicacao')
const usuario = require('./services/service_authentication')

/* Paciente  */
routes.post('/paciente', usuario.checkToken, paciente.salvarPaciente)
routes.get('/paciente', usuario.checkToken, paciente.listarPacientes)
routes.put('/paciente', usuario.checkToken, paciente.atualizarPaciente)

/* glicemia */
routes.post('/glicemia', usuario.checkToken, glicemia.salvarGlicemia)

/* Aplicação */
routes.post('/aplicacao', usuario.checkToken, aplicacao.salvarAplicacao)

routes.post('/register', usuario.register)
routes.post('/login', usuario.login)
routes.post('/recoverPassword', usuario.recoverPassword)
routes.post('/changePassword', usuario.changePassword)

routes.get('/', (req, res) => {
    res.sendfile('./views/index.html')
})

module.exports = routes;
