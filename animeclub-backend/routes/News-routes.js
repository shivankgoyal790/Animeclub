const express = require("express");
 const router = express.Router();
 const Newscontrollers = require("../Controllers/News-controllers")

 router.get("/" ,Newscontrollers.getnewsbytime);
 router.post("/createnews",Newscontrollers.createnews);
 router.patch("/like/:newsid",Newscontrollers.updatecount);


 
 module.exports = router