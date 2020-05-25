const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const requireDir = require("require-dir")

// Iniciando o app
const app = express()

// permitir receber JSON nas requisições
app.use(express.json())
app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))

// Iniciando o DB
mongoose.connect("mongodb://usuario:usuario@mongodbblackbook-shard-00-00-zdqhv.azure.mongodb.net:27017,mongodbblackbook-shard-00-01-zdqhv.azure.mongodb.net:27017,mongodbblackbook-shard-00-02-zdqhv.azure.mongodb.net:27017/test?ssl=true&replicaSet=MongoDbBlackBook-shard-0&authSource=admin&retryWrites=true&w=majority", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .catch((error) => {
    console.log(error)
  })

requireDir("./models")
app.use( require("./routes"))

app.listen(process.env.PORT || 8080)