const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
    headline : {type : String ,required:true},
    description : {type : String ,required:true},
    likescount : {type : Number ,default : 0},
    createdAt : {type : Date , default : Date.now()}
})

module.exports = mongoose.model('News' , NewsSchema)