const { Decimal128 } = require("bson");
const mongoose = require("mongoose");

const itemschema = new mongoose.Schema({
    name : {type : String , required:true},
    year : {type : Number , required:true},
    episodes : {type : Number},
    Type : {type : String,required:true},
    imdbrating : {type : Decimal128 , required:true},
    crunchyrating : {type : Decimal128 , required : true},
    summary : {type : String , required:true},
    ismovie : {type :Boolean ,required:true}


})

module.exports = mongoose.model("Items",itemschema) 