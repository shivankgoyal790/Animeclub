const Item = require("../models/Item-model");
const fs = require('fs');



const Createitem = async (req,res,next) =>{
    const {name,year,episodes,Type,imdbrating ,crunchyrating ,  summary , ismovie} = req.body;
    let newitem
    try{
        newitem = await new Item({
            name,year,episodes,Type,imdbrating,crunchyrating,
            summary,ismovie ,image:req.file.path       
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

    let moviecheck;
    try{
        moviecheck = await Item.find({ismovie : true});
        res.status(200).json({movies: moviecheck});
        }
        catch(err){
            console.log(err);
            res.status(404).json("cannot get");
        }

}

const getanime = async (req,res,next) =>{
    
    let animecheck;
    try{
        animecheck = await Item.find({ismovie : false});
        res.status(200).json({anime : animecheck});
        }
        catch(err){
            console.log(err);
            res.status(404).json("cannot get");
        }

}


exports.Createitem = Createitem;
exports.getanime = getanime;
exports.getmovies = getmovies;