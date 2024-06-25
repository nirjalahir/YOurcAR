const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password:{
    type:String,
    required: true,
  },
  budget:{
    type:String,
  },
  cartype:{
    type:String,
  },
  Accomodation:{
    type:String,
  },
  driveoption:{
    type:String,
  },
  transmission:{
    type:String,
  },
  carBrands: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});


module.exports = mongoose.model("User", userSchema);