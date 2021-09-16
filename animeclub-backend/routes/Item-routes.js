const express = require("express");
 const router = express.Router();
const Itemcontrollers= require("../Controllers/item-controllers");

router.post("/createitem" , Itemcontrollers.Createitem);
router.get("/anime",Itemcontrollers.getanime);
router.get("/movies",Itemcontrollers.getmovies);

module.exports = router;