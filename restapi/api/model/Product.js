const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose');

 const productSchema = new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String
   
})
module.exports = mongoose.model('products',productSchema); 