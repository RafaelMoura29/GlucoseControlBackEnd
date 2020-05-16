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

/* Aplicação */
const aplicacao = require('./services/service_aplicacao')
routes.post('/aplicacao', aplicacao.create_aplicacao)
routes.get('/aplicacao', aplicacao.list_aplicacao)

const mongoose = require("mongoose");
const Paciente = mongoose.model("Paciente");
routes.get('/aplicacaoGlucoseAndUserData', (req, res) => {
    console.log('agregate')
    Paciente.aggregate([{
        $group: Paciente
    }, {
        $lookup: {
            from: "Glucose", // collection to join
            localField: "_id",//field from the input documents
            foreignField: "_idPaciente",//field from the documents of the "from" collection
            as: "comments"// output array field
        }
    }, {
        $lookup: {
            from: "Aplicacao", // from collection name
            localField: "_id",
            foreignField: "_idPaciente",
            as: "posts"
        }
    }], (error, data) => {
        console.log('end')
        return res.send({error, data})
    })
})
    module.exports = routes;