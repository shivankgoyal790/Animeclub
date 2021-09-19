import React, { useEffect, useState } from "react";
import Lodaingspinner from "../Shared/Loadingspinner";
import Mainnav from "../Shared/Mainnav";
import Animelist from "./Animelist";

const Anime = () =>{
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
    // const Animeitems = [
    //     {
    //         id:"a1",
    //         name : "One Piece",
    //         year  :"1999",
    //         episodes : "990 Episodes",
    //         type : "Adventure",
    //         imdbrating : "8.5",
    //         crunchyrollrating : "4.5",
    //         summary : `Monkey D. Luffy wants to become the King of all pirates.
    //          Along his quest he meets: a skilled swordsman named Roronoa Zolo;
    //           Nami, a greedy thief who has a knack for navigation; Usopp, a great liar
    //            who has an affinity for inventing; Sanji, a warrior cook; Chopper,
    //             a sentient deer who is also a skilled physician; and Robin, former member of Baroque Works. 
    //             The gang sets sail to unknown seas in Grand Line to find the treasure of One Piece.`
    //     },
    //     {
    //         id:"a2",
    //         name : "Tokyo Ghoul",
    //         year : "2012",
    //         episodes : "48 Episodes",
    //         type :"dark fantasy",
    //         imdbrating :"7.8",
    //         crunchyrollrating :"3.5",
    //         summary:`In a world where ghouls live among humans, they are the
    //          same as regular people in virtually every way -- other than their
    //           craving for human flesh. Shy Ken Kaneki learns that the hard way
    //            when he goes on a date with beautiful Rize, who is only interested in him to eat him.
    //             After a morally questionable rescue, Ken becomes the first half-human, half-ghoul hybrid,
    //              which draws him into the dark, violent world of ghouls that exists alongside the world of humans.`

    //     }
    // ]

    
    return(
        <div className="stream-container">
        <div className="streamheader">
            <Mainnav />
        </div>
        {!Animeitems && <Lodaingspinner/>}
        {Animeitems && <Animelist items = {Animeitems} id="1"/>}
        </div>
    )
}

export default Anime