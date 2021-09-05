import React from "react"
import "./Mainnav.css"
import Navbar from "./Navbar"

const Mainnav = () =>{
    return(
        <div className="nav-container">
                <h1 className="sitelogo">AnimeClub</h1>
                <Navbar/>
                <div style={{zIndex:2}}>
                <button className="signin">Sign In</button>
                <button className="signup">Sign Up</button>
                </div>
        </div>
    )
}

export default Mainnav