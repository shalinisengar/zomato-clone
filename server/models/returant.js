const mongoose = require("mongoose");

let retruarantSchema = new mongoose.Schema({

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
    
  },
  contact_No:{
    type:Number,
    require:true
  },
  opning_time:{
    type:Date,
    
  },
  image:{
    type:String,
    
  }

})
  let Restruarant =  mongoose.model('Restruarant',retruarantSchema)

  module.exports= Restruarant