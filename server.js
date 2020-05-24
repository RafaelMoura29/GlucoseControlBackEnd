const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o app
const app = express();

// permitir receber JSON nas requisições
app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
  var allowedOrigins = ['http://127.0.0.1:8080', 'http://localhost:8080', 'https://glycon.herokuapp.com/'];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
 
  return next();
});

// Iniciando o DB
mongoose.connect("mongodb://usuario:usuario@mongodbblackbook-shard-00-00-zdqhv.azure.mongodb.net:27017,mongodbblackbook-shard-00-01-zdqhv.azure.mongodb.net:27017,mongodbblackbook-shard-00-02-zdqhv.azure.mongodb.net:27017/test?ssl=true&replicaSet=MongoDbBlackBook-shard-0&authSource=admin&retryWrites=true&w=majority", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .catch((error) => {
    console.log(error)
  })

requireDir("./models");
app.use( require("./routes"));

app.listen(process.env.PORT || 8080);