import React, { useContext, useState } from "react"
import "./Mainnav.css"
import Navbar from "./Navbar"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { AuthContext } from "../AuthContext"
import Sidedrawer from "./Sidedrawer"
import Backdrop from "./Backdrop"

const Mainnav = () =>{
        const Auth = useContext(AuthContext);
        const logouthandler = () =>{
            Auth.logout();
        }
        const [showsidedrawer ,setshowsidedrawer] = useState(false);

        const showsidedrawerhandler = () =>{
            setshowsidedrawer(true);
        }

        const closesidedrawerhandler = () =>{
            setshowsidedrawer(false);
        }
    return(
        <>
        <div style={{width : "100vw" , backgroundColor:"white"}}>
        {showsidedrawer && <Backdrop onClick = {closesidedrawerhandler}/>}
        <Sidedrawer show={showsidedrawer} onClick ={showsidedrawerhandler}/>
        </div>
        <div className="nav-container">
                <div>
                <span onClick={showsidedrawerhandler} className="hamburger"><FontAwesomeIcon icon={faBars} /> </span>
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
        </>
    )
}

export default Mainnav