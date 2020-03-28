const mongoose = require("mongoose");

const Glucose = mongoose.model("Glucose");
 
module.exports = {
    async create_glucose(req, res) {
        const glucose = await Glucose.create(req.body);
        res.send({passed: glucose,});
    },
    async list_glucose(req, res) {
        if(req.query.tagId){
            const glucose = await Glucose.find({"_id":req.query.tagId});
            return res.send({glucose}); 
        }
        const glucose = await Glucose.find();
        return res.send({glucose});
    },
}