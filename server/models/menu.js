const mongoose = require("mongoose");

let menuSchema = new mongoose.Schema({

  name:{
    type:String,
    require:true
  },
 
  description:{
    type:String,
    require:true
  },
 
 
  price:{
    type:Number,
    require:true
  }

})
  let Menu =  mongoose.model('Menu',menuSchema)
  module.exports = Menu