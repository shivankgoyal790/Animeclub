import React from "react";
import "./Animecard.css"
import Logo from "../images/One1_files/MV5BNzEyZWI4MTQtNWQ1ZC00Y2VjLTkxNjQtMzVmMjkxNWUyNjM2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
import Logo1 from "../images/crunchyroll.png"
const Animecard = () =>{
    return(
        <div className="animecard" >
            <div className="anime-image">
            <img src={Logo} alt="pic" /></div>
            <div className="anime-description-container">
                <h1>One Piece</h1>
                <div>
                    <span className="info">1999</span>
                    <span className="vr"></span>
                    <span className="info">990 Episodes</span>
                    <span className="vr"></span>
                    <span className="info">adventure</span>
                </div>
                <div>
                    <span>8.5/10</span>
                    <button className="imdb">IMDB</button>
                    <span>4.5/5</span>
                    <img src={Logo1} alt="hi"></img>
                </div>
                <h3>SUMMARY</h3>
                <p>Monkey D. Luffy wants to become the King of all pirates.
                Along his quest he meets: a skilled swordsman named Roronoa Zolo;
                Nami, a greedy thief who has a knack for navigation; Usopp, a great
                liar who has an affinity for inventing; Sanji, a warrior cook;
                Chopper, a sentient deer who is also a skilled physician; and Robin,
                former member of Baroque Works. The gang sets sail to unknown seas 
                in Grand Line to find the treasure of One Piece.</p>
                <div>
                    <button>WATCH</button>
                    <button>DOWNLOAD</button>
                </div>
            </div>
        </div>
    )
}

export default Animecard