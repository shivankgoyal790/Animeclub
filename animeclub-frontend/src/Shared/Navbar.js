import React from "react"
import "./Navbar.css"
import {Link}from "react-router-dom"
const Navbar = () =>{
    return(
        <ul className="navlist">
            <Link to="/stream"><li>Stream</li></Link>
            <Link to="/newuploads"><li>New Uploads</li></Link>
            <Link to="/premium"><li>Premium</li></Link>
            <Link to="/movies"><li>Movies</li></Link>
            <Link to="/news"><li>News</li></Link>
        </ul>
    )
}

export default Navbar