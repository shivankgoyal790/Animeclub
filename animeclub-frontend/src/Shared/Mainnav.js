import React from "react"
import "./Mainnav.css"
import Navbar from "./Navbar"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Mainnav = () =>{
    return(
        <div className="nav-container">
                <div>
                <span className="hamburger"><FontAwesomeIcon icon={faBars} /> </span>
                <h1 className="sitelogo"><NavLink to="/">AnimeClub</NavLink></h1>
                </div>

                <Navbar/>
                <div style={{zIndex:2}}>
                <NavLink to="/signin" > <button className="signin">Sign In</button></NavLink>
                <NavLink to="/signup"><button className="signup">Sign Up</button></NavLink> 
                <NavLink to="/signup"><button className="signup" style={{display:"none"}}>Log Out</button></NavLink> 
                </div>
        </div>
    )
}

export default Mainnav