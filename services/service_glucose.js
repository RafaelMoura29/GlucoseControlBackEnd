const mongoose = require("mongoose");

const Glucose = mongoose.model("Glucose");
 
module.exports = {
    async create_glucose(req, res) {
        const glucose = await Glucose.create(req.body);
        res.send({passed: glucose,});
    },
    async list_glucose(req, res) {
        const glucose = await Glucose.find();
        res.send({passed: glucose,});
    },
}