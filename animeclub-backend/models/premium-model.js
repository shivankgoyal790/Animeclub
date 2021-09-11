const mongoose = require("mongoose");

const PremiumSchema = new mongoose.Schema({
    startdate : { type:Date , required:true ,default : Date.now},
    userid : {type:String, required:true },
    expireAt : {type:Date,default:Date.now , index : {expires : '5m'}}
})
module.exports = mongoose.model('premium',PremiumSchema)