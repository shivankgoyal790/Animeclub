import React from "react";
import "./Mainheader.css"
import Mainnav from "./Mainnav";
import Contact from "../Contact/Contact"
const Mainheader = () =>{
    return(
    <div className="main-background">
        <Contact />
            <div className="headercontent">
            <div>
            <Mainnav></Mainnav>
            </div>
            <div className="site-info">
                <h1 >Stream Anime Free With AnimeClub.</h1>
                <p>Stop searching for free Anime websites and watch AnimeClub now.</p>
                <br/>
                <br/>
                <button className="signup">Stream Free Now</button>
            </div>


            </div>
        </div>  
    );
}

export default Mainheader   