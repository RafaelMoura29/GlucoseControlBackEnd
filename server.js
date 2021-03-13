const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const requireDir = require("require-dir")

// Iniciando o app
const app = express()

// permitir receber JSON nas requisições
app.use(express.json())
app.use(cors())

// Iniciando o DB
mongoose.connect(process.env.ULR_MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .catch((error) => {
        console.log(error)
    })

requireDir("./models")
app.use(require("./routes"))

app.listen(process.env.PORT || 8080)
