const mongoose = require("mongoose");
const Users = require("../models/user-model");
const premium  = require("../models/premium-model")
const express = require("express");




const Login = async (req,res,next) =>{
    const {email,password} = req.body;
    let usercheck ;
    try{
        usercheck =await Users.findOne({email:email});
    }
    catch(err){
        console.log(err);
        res.status(404).json("try again");
    }

    try{
        if(!usercheck || !usercheck.password)
        res.status(400).json("check credentials");
        else
        res.json({message: "you are logged" , user : usercheck});
    }
    catch(err){
        console.log(err);
        res.status(404).json("canont Login");
    }
}


const Signup = async (req,res,next) => {

    const {name,email,password} = req.body;
    let newuser
    try{
    newuser = await new Users(
        {
        name : name,
        email : email,
        password : password
        }
    )
    }
    catch(err){
        console.log(err);
        res.status(404).json("try again");
    }

        try{
            if(!newuser.password || newuser.name === "" || newuser.email === "" ){
                throw new Error("check credential")
            }
            else{
                await newuser.save();
            }
        }
    catch(err){
        console.log(err);
        res.status(404).json("check your credentials");
    }
       
    res.status(200).json({message : "welcome" , user : newuser});

}

 const Addpremium1month = async (req,res,next) =>{
        const userid = req.params();
        let newpremium;
        try{
            newpremium = await new premium.createIndexes(
                {
                    startdate : Date.now(),
                    userid : userid

                }

                
            )
        }
        catch(err){
            
        }

 }

// const Addpremium6months = async (req,res,next) =>{
    
// }

exports.Signup = Signup;
exports.Login = Login;