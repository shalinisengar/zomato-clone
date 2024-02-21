const  mongoose  = require("mongoose");

let reviewSchema = mongoose.Schema({
 user_Id:[{
    type:Schema.Type.ObjectId,
    ref:'User'
 }],
 comment:{
    type:String
 }

})
let Review = mongoose.model('Review',reviewSchema)
module.exports = Review