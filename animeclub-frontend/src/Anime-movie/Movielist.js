import React from "react";
import "../Anime/Animelist.css"
import Animecard from "../Anime/Animecard";

const Movielist = (props) =>{
    return(
        <div className="animeflex">

            {props.items.map(curr => (
                <Animecard 
                name = {curr.name}
                year = {curr.year}
                type = {curr.type}
                imdbrating = {curr.imdbrating}
                crunchyrollrating = {curr.crunchyrollrating}
                summary = {curr.summary}
                 />
            ))}
        </div>
    )
}

export default Movielist