import React, { useContext } from "react"
import "./Mainnav.css"
import Navbar from "./Navbar"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { AuthContext } from "../AuthContext"

const Mainnav = () =>{
        const Auth = useContext(AuthContext);
        const logouthandler = () =>{
            Auth.logout();
        }
    return(
        <div className="nav-container">
                <div>
                <span className="hamburger"><FontAwesomeIcon icon={faBars} /> </span>
                <h1 className="sitelogo"><NavLink to="/" exact>AnimeClub</NavLink></h1>
                </div>

                <Navbar/>
                <div style={{zIndex:2}}>
                {!Auth.isLoggedIn &&
                <NavLink to="/signin" > <button className="signin">Sign In</button></NavLink>}
                {!Auth.isLoggedIn &&
                <NavLink to="/signup"><button className="signup">Sign Up</button></NavLink>}
                {Auth.isLoggedIn && <button className="signup" onClick={logouthandler}>Log Out</button>} 
                </div>
        </div>
    )
}

export default Mainnav