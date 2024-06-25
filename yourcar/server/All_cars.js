const mongoose = require('mongoose');
const AllcSchema = new mongoose.Schema({

    urlToImage: String,
    model:String,
    engine:String,
    transmission:String,
    power:String,
    torque:String,
    mileage:String,
    price:String,
    variants: [String],
    images_color:[String]


})
module.exports = mongoose.model("all_cars", AllcSchema)
