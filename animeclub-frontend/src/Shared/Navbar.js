import React from "react"
import "./Navbar.css"
import {Link}from "react-router-dom"
const Navbar = () =>{
    return(
        <ul className="navlist">
            <Link to="/stream"><li>Stream</li></Link>
            <li>Trending</li>
            <Link to="/premium"><li>Premium</li></Link>
            <Link to="/movies"><li>Movies</li></Link>
            <li>News</li>
        </ul>
    )
}

export default Navbar