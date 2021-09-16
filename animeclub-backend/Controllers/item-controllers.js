const Item = require("../models/Item-model");


const Createitem = async (req,res,next) =>{
    const {name,year,episodes,Type,imdbrating ,crunchyrating ,  summary , ismovie} = req.body;
    let newitem
    try{
        newitem = await new Item({
            name,year,episodes,Type,imdbrating,crunchyrating,
            summary,ismovie            
        })

        
    }
    catch(err){
        console.log(err);
        res.status(404).json("try again");
    }

    try{
        if(newitem){
            await newitem.save();
        }
        res.json(newitem);

    }
    catch(err){
        console.log(err);
        res.json("provide complete info")
    }

}

const getmovies = async (req,res,next) =>{

}

const getanime = async (req,res,next) =>{

}

exports.Createitem = Createitem;
exports.getanime = getanime;
exports.getmovies = getmovies;