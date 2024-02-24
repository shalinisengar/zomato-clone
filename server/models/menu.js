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
 
 
  category:{

    type:String,
    enum:[
      'veg','non-veg'
    ],
    default:'veg'
   
  }

})
  let Menu =  mongoose.model('Menu',menuSchema)
  module.exports = Menu