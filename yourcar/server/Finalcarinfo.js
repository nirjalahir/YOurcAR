const mongoose = require('mongoose');
const FinalcSchema = new mongoose.Schema({

    name: String,
    engine: String,
    transmission: String,
    fuel:String,
    waitingPeriod:String,
    mileage: String,
    price: String,
    additionalFeatures: [String]


})
module.exports = mongoose.model("all_variants", FinalcSchema)