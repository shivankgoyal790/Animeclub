import React from "react";
import "./Mainheader.css"
import Mainnav from "./Mainnav";
import Logo from "../images/anime.jpg"
const Mainheader = () =>{
    return(
    <div className="main-background">
            <img src={Logo} alt="anime"></img>
            <div className="headercontent">
            <Mainnav></Mainnav>
            </div>
        </div>  
    );
}

export default Mainheader   