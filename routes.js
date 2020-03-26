const express = require('express');
const routes = express.Router();

/* Indicador entrada saida */
const controller_indicador_entrada_saida = require('./controllers/controller_indicador_entrada_saida')
routes.post('/indicador_entrada_saida', controller_indicador_entrada_saida.create_indicador_entrada_saida );
routes.get('/indicador_entrada_saida', controller_indicador_entrada_saida.get_indicadores );

/* Leito */
const controller_leito = require('./controllers/controller_leito')
routes.post('/leito', controller_leito.create_leito);
routes.get('/leito', controller_leito.get_leito)

/* Paciente  */
const controller_paciente = require('./controllers/controller_paciente')
routes.post('/paciente', controller_paciente.create_paciente);

/* Unidade  */
const controller_unidade = require('./controllers/controller_unidade')
routes.post('/unidade', controller_unidade.create_unidade);
routes.get('/unidade', controller_unidade.get_unidade);

/* Usuário  */
const controller_usuario = require('./controllers/controller_usuario')
routes.post('/usuario', controller_usuario.create_usuario);
routes.post('/auth_usuario', controller_usuario.login_usuario )


module.exports = routes;