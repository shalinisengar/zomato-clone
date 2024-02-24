const  mongoose  = require("mongoose");

let ratingSchema = mongoose.Schema({
 user_Id:[{
    type:mongoose.Schema.Type.ObjectId,
    ref:'User'
 }],
 rating:{
    type:Number
 }

})
let Rating = mongoose.model('Rating',ratingSchema)
module.exports = Rating