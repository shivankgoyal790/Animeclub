import React from "react";
import "./Animelist.css"
import Animecard from "./Animecard";

const Animelist = (props) =>{
    return(
       <>
            {props.items.map(curr => (
                <div className="animeflex" key = {props.id}>

                <Animecard 
                name = {curr.name}
                year = {curr.year}
                episodes = {curr.episodes}
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

export default Animelist