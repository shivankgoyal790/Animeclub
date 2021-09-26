const Premium =  require("../models/premium-model")
const User = require("../models/user-model")

const getpremiumforsixmonths = async (req,res,next)=> {

    const userid = req.params;
    let finduser;
    let newpremium;
    try{
        finduser = await Premium.findById(userid);
        newpremium = await new Premium({
            user
        })
    }
    catch(err){
        console.log(err);
        res.status(404).json("cannot buy try after some time");
    }
}