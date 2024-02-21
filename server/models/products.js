const  mongoose  = require("mongoose");

let productSchema = mongoose.Schema({
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
 },
 image:{
    type:String,
    require:true
 }
})
let Product = mongoose.model('Product',productSchema)
module.exports= Product