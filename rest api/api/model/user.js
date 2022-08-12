const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose');

 const userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:String,
    password:String,
    confirmPassword:String,
    phone:Number,
   

})
module.exports = mongoose.model('User',userSchema); 