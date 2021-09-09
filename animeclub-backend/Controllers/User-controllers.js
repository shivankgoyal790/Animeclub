const mongoose = require("mongoose");
const Users = require("../models/user-model");
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
        res.json("you are logged");
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
       
    res.status(200).json({message : "welcome" , answer : newuser});

}




exports.Signup = Signup;
exports.Login = Login;