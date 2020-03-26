const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o app
const app = express();

// permitir receber JSON nas requisições
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect("mongodb+srv://usuario:usuario@mongodbblackbook-zdqhv.azure.mongodb.net/GlucoseControl?retryWrites=true&w=majority", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

requireDir("./models");
app.use( require("./routes"));

app.listen(process.env.PORT || 8080);