import React from "react";
import "./Animelist.css"
import Animecard from "./Animecard";

const Animelist = (props) =>{
    return(
        <div className="animeflex">

            {props.items.map(curr => (
                <Animecard 
                name = {curr.name}
                year = {curr.year}
                episodes = {curr.episodes}
                type = {curr.type}
                imdbrating = {curr.imdbrating}
                crunchyrollrating = {curr.crunchyrollrating}
                summary = {curr.summary}
                 />
            ))}
        </div>
    )
}

export default Animelist