import React, { useEffect, useState } from "react";
import Animelist from "../Anime/Animelist";
import Lodaingspinner from "../Shared/Loadingspinner";
import Mainnav from "../Shared/Mainnav";
import "./Newuploads.css"

const Newuploads = () =>{

    const[active,setactive] = useState(true);
    const togglehandler = () =>{
        if(active === true)
        setactive(false)
        else
        setactive(true);

    }

    const [Animeitems,setanimeitems] = useState();
    useEffect(()=>{
        const getanime = async () =>{
                try{    
                const response = await fetch("http://localhost:5000/item/anime");
                const responsedata = await response.json();
                if(!response.ok){
                   console.log("err")
                    }
                setanimeitems(responsedata.anime); 
                }
                catch(err){
                    console.log(err);
                    console.log("cannot get");
                }
        }
        getanime();
    },[])
    return(
        <>
         <div className="streamheader">
            <Mainnav />
        </div>
         <div className="upload-container">
            <h1 className="choosebtn-container">
            <button 
            className="choosebtn" 
            style={{color : active ? "gold" : "white"}} 
            onClick = {togglehandler}>Anime
            </button>
            <button 
            className="choosebtn" 
            style={{color : !active ? "gold" : "white"}}
            onClick={togglehandler}>
            Movies</button>
            </h1>
            <div>
            {!Animeitems && <Lodaingspinner/>}
            {Animeitems && <Animelist items = {Animeitems} id="1"/>}
            </div>
        </div>
        </>
    );
}

export default Newuploads