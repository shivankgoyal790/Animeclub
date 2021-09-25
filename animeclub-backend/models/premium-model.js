const mongoose = require("mongoose");

const PremiumSchema = new mongoose.Schema({
    userid : {type:String, required:true }
})
module.exports = mongoose.model('premium',PremiumSchema)