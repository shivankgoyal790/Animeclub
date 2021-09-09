 const express = require("express");
 const router = express.Router();
 const usercontrollers = require("../Controllers/User-controllers")

 router.get("/" ,(req,res,next) =>{
     res.json("hi")
 })


 router.post("/signup" ,usercontrollers.Signup);

router.post("/login",usercontrollers.Login);
 
 module.exports = router