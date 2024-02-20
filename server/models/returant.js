const mongoose = require("mongoose");

let retuarantSchema = new mongoose.Schema({

  name:{
    type:String,
    require:true
  },
  address:{
    type:String,
    require:true
  }
  ,
  description:{
    type:String,
    require:true
  },
  contact_No:{
    type:Number,
    require:true
  },
  opning_time:{
    type:Date,
    require:true
  },
  image:{
    type:String,
    require:true
  }

})
  let restuarant =  mongoose.model('Restuarant',retuarantSchema)
  module.default = restuarant