const express = require("express");
 const router = express.Router();
 const Newscontrollers = require("../Controllers/News-controllers");
const fileUpload = require("../middlewares/file-upload");

 router.get("/" ,Newscontrollers.getnewsbytime);
 router.post("/createnews",fileUpload.single('image'),Newscontrollers.createnews);
 router.patch("/like/:newsid",Newscontrollers.updatecount);


 
 module.exports = router