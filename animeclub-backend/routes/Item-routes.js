const express = require("express");
 const router = express.Router();
const Itemcontrollers= require("../Controllers/item-controllers");
const fileUpload = require("../middlewares/file-upload");

router.post("/createitem" ,fileUpload.single('image'), Itemcontrollers.Createitem);
router.get("/anime",Itemcontrollers.getanime);
router.get("/movies",Itemcontrollers.getmovies);

module.exports = router;