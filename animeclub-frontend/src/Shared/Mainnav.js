import React from "react"
import "./Mainnav.css"
import Navbar from "./Navbar"
import { NavLink } from "react-router-dom"

const Mainnav = () =>{
    return(
        <div className="nav-container">
                <h1 className="sitelogo"><NavLink to="/">AnimeClub</NavLink></h1>
                <Navbar/>
                <div style={{zIndex:2}}>
                <NavLink to="/signin" > <button className="signin">Sign In</button></NavLink>
                <NavLink to="/signup"><button className="signup">Sign Up</button></NavLink> 
                </div>
        </div>
    )
}

export default Mainnav