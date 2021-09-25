const mongoose = require("mongoose");

const itemschema = new mongoose.Schema({
    name : {type : String , required:true},
    year : {type : Number , required:true},
    episodes : {type : Number},
    Type : {type : String,required:true},
    imdbrating : {type : Number , required:true},
    crunchyrating : {type : Number , required : true},
    summary : {type : String , required:true},
    ismovie : {type :Boolean ,required:true},
    image :{type:String ,required:true},
    createdAt : {type:Date , default: Date.now()}


})

module.exports = mongoose.model("Items",itemschema) 