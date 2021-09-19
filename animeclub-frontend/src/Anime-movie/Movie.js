import React, { useState , useEffect} from "react";
import Lodaingspinner from "../Shared/Loadingspinner";
import Mainnav from "../Shared/Mainnav";
import Movielist from "./Movielist";

const Movie = () =>{
    const [Movieitems,setmovieitems] = useState();
    useEffect(()=>{
        const getmovie = async () =>{
                try{    
                const response = await fetch("http://localhost:5000/item/movies");
                const responsedata = await response.json();
                if(!response.ok){
                   console.log("err")
                    }
                setmovieitems(responsedata.movies); 
                }
                catch(err){
                    console.log(err);
                    console.log("cannot get");
                }
        }
        getmovie();
    },[])
    // const Movieitems = [
    //     // {
        //     id:"m1",
        //     name : "Your Name",
        //     year  :"2016",
        //     type : "Romance Fantasy",
        //     imdbrating : "8.5",
        //     crunchyrollrating : "4.5",
        //     summary : `Two teenagers share a profound, magical connection upon discovering they
        //      are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.`
        // },
        // {
        //     id:"m2",
        //     name : "Tokyo Ghoul",
        //     year : "2012",
        //     type :"dark fantasy",
        //     imdbrating :"7.8",
        //     crunchyrollrating :"3.5",
        //     summary:`In a world where ghouls live among humans, they are the
        //      same as regular people in virtually every way -- other than their
        //       craving for human flesh. Shy Ken Kaneki learns that the hard way
        //        when he goes on a date with beautiful Rize, who is only interested in him to eat him.
        //         After a morally questionable rescue, Ken becomes the first half-human, half-ghoul hybrid,
        //          which draws him into the dark, violent world of ghouls that exists alongside the world of humans.`

        // }
    // ]
    
    return(
        <div className="stream-container">
        <div className="streamheader">
            <Mainnav />
        </div>
        {!Movieitems && <Lodaingspinner/>}
        {Movieitems && <Movielist items = {Movieitems} id="1"/>}
        </div>
    )
}

export default Movie