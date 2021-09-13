const News = require("../models/News-model");

const getnewsbytime = async (req,res,next) =>{

    try{

        const latestnews = await News.find({createdAt : {$gt: new Date('2021-09-11T18:30:00.000+00:00') }});
        res.status(201).json({message : "hi" , latestnews : latestnews.map(latestnews => latestnews.toObject({getters:true}))});
    }
    catch(err){
        console.log(err);
        res.status(404).json("cannot load");
    } 
}

const createnews = async (req,res,next) =>{
    let newnews;
    const {headline , description} = req.body;
    try{
                newnews = await new News({
                headline : headline,
                description : description,
                likescount : 0,
                createdAt : Date.now()
            });
    }
    catch(err){
            console.log(err);
    }

    try{
        await newnews.save();
    }catch(err){
        console.log(err);
        res.status(404).json("cannot create");
    }

    res.status(201).json(newnews);
}

const updatecount = async (req,res,next) =>{

    const newsid = req.params.newsid;
    const {likescount} = req.body; 
    let findnews
    try{

        findnews = await News.findById(newsid);
    }
    catch(err){
        res.status(404).json("cannot like");
    console.log("cannot like")
    }

    findnews.likescount = likescount;
    try{

        await findnews.save();
    }
    catch(err){
        console.log(error);
    }

    res.status(201).json({findnews});
}


exports.getnewsbytime = getnewsbytime;
exports.createnews = createnews;
exports.updatecount = updatecount;