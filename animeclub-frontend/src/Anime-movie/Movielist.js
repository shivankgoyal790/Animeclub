import React from "react";
import "../Anime/Animelist.css"
import Animecard from "../Anime/Animecard";

const Movielist = (props) =>{
    return(
        <>
            {props.items.map(curr => (
                <div className="animeflex" key = {props.id}>

                <Animecard 
                name = {curr.name}
                year = {curr.year}
                type = {curr.Type}
                imdbrating = {curr.imdbrating}
                crunchyrollrating = {curr.crunchyrating}
                summary = {curr.summary}
                ismovie = {curr.ismovie}
                 />
                  </div>
            ))}
       </>
    )
}

export default Movielist