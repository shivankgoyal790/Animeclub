import React, { useContext } from "react";
import "./Mainheader.css"
import Mainnav from "./Mainnav";
import Contact from "../Contact/Contact"
import { AuthContext } from "../AuthContext";
const Mainheader = () =>{
    const auth = useContext(AuthContext)
    return(
        
    <div className="main-background">
        {auth.isLoggedIn && <Contact />}
            <div className="headercontent">
            <Mainnav></Mainnav>
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