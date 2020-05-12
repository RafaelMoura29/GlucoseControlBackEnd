const mongoose = require("mongoose");

const Glucose = mongoose.model("Glucose");

module.exports = {
  create_glucose(req, res) {
    Glucose.create(req.body)
      .then((glucose) => {
        return res.send({ glucose })
      })
      .catch((error) => {
        return res.send({ error })
      })
  },

  list_glucose(req, res) {
    Glucose.find(req.query.tagId ? { "_idPaciente": req.query.tagId } : {})
      .then((glucose) => {
        return res.send({ glucose });
      })
      .catch((error) => {
        return res.send({ error })
      })
  },
}
