const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name: {type:String , required:true},
    email : {type : String, required: true, unique:true},
    password :{type : String, required: true , minlength:6},
    premium : {type : Boolean , default:false}
});
module.exports = mongoose.model('Users',userschema);