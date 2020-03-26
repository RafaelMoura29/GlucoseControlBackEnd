const mongoose = require("mongoose");

const IndicadorEntradaSaida = mongoose.model("IndicadorEntradaSaida");

module.exports = {
    async create_indicador_entrada_saida(req, res) {
        const indicadorEntradaSaida = await IndicadorEntradaSaida.create({
            DataEntrada: req.body.dataEntrada,
            HorarioEntrada: req.body.horarioEntrada,
            DataSaida: req.body.dataSaida,
            HorarioSaida: req.body.horarioSaida,
            Prontuario: req.body.prontuario,
            Tipo: req.body.tipo
        });
        res.send({ passed: true, });
    },

    async get_indicadores(req, res) {
        const indicadores = await IndicadorEntradaSaida.find()
        obito = [0,0,0,0,0,0,0,0,0,0,0,0]
        evasao = [0,0,0,0,0,0,0,0,0,0,0,0]
        transferencia = [0,0,0,0,0,0,0,0,0,0,0,0]
        alta = [0,0,0,0,0,0,0,0,0,0,0,0]
        totalSaidas = []
        mortalidadeBruta = []
        indicadores.forEach((element) => {
            if (element["Tipo"] === "obito") {
                data = parseInt(element["DataSaida"].slice(5, 7))
                obito[data - 1]++
            } else if (element["Tipo"] === "evasao") {
                data = parseInt(element["DataSaida"].slice(5, 7))
                evasao[data - 1]++
            } else if (element["Tipo"] === "transferencia") {
                data = parseInt(element["DataSaida"].slice(5, 7))
                transferencia[data - 1]++
            } else if (element["Tipo"] === "alta") {
                data = parseInt(element["DataSaida"].slice(5, 7))
                alta[data - 1]++
            }
        })

        for (let i = 0; i < alta.length; i++) {
            totalSaidas.push(obito[i] + evasao[i] + transferencia[i] + alta[i])            
        }

        for (let i = 0; i < alta.length; i++) {
            resul = (obito[i] / totalSaidas[i]) * 100
            mortalidadeBruta.push( resul.toFixed(2) )            
        }

        res.send({
            'obito': obito,
            'evasao': evasao,
            'transferencia': transferencia,
            'alta': alta,
            'totalSaidas': totalSaidas,
            'mortalidadeBruta': mortalidadeBruta
        })
    }
}