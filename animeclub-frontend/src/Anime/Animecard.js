import React from "react";
import "./Animecard.css"
import Logo from "../images/One1_files/MV5BNzEyZWI4MTQtNWQ1ZC00Y2VjLTkxNjQtMzVmMjkxNWUyNjM2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
import Logo1 from "../images/crunchyroll.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Animecard = (props) =>{
    return(
        <div className="animecard" >
            <div className="anime-image">
            <img src={Logo} alt="pic" /></div>
            <div className="anime-description-container">
                <h1>{props.name}</h1>
                <div>
                    <span className="info">{props.year}</span>
                    {props.episodes && <span className="vr"></span>}
                    <span className="info">{!props.ismovie && `${props.episodes} episodes`}</span>
                    <span className="vr"></span>
                    <span className="info">{props.type}</span>
                </div>
                <div className="rating">
                    <span>{props.imdbrating}/10</span>
                    <button className="imdb">IMDB</button>
                    <span>{props.crunchyrollrating}/5</span>
                    <img src={Logo1} alt="hi" className="ratinglogo"></img>
                </div>
                <h3>SUMMARY</h3>
                <p>{props.summary}</p>
                <div>
                    <button className="watch-button">
                    <FontAwesomeIcon className="watchicon" icon={faPlay}/>WATCH</button>
                    <button className="watch-button">
                    <FontAwesomeIcon className="watchicon" icon={faDownload} />
                    DOWNLOAD</button>
                </div>
            </div>
        </div>
    )
}

export default Animecard