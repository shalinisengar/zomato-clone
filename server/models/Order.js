const  mongoose  = require("mongoose");

let orderSchema = mongoose.Schema({
 user_Id:[{
    type:Schema.Type.ObjectId,
    ref:'User'
 }],
 restuarant_Id:[{
    type:Schema.Type.ObjectId,
    ref:'Restuarant'
 }],
 price:{
    type:Number
 },
 status:{
    type:String,
    enum:['pending','confirmed','delivered'],
    default:"pending"
 }

})
let Order = mongoose.model('Order',orderSchema)
module.default = Order