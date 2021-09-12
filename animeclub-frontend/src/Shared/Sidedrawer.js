import React from "react"
import "./Sidedrawer.css"
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
const Sidedrawer = (props) =>{
    return ReactDOM.createPortal(
                <div className="drawer" onClick = {props.onClick} style ={{display : props.show ? "flex" : "none"}}>
                <ul className="sidedrawernav">
                    <Link to="/stream"><li>Stream</li></Link>
                    <Link to="/newuploads"><li>New Uploads</li></Link>
                    <Link to="/premium"><li>Premium</li></Link>
                    <Link to="/movies"><li>Movies</li></Link>
                    <Link to="/news"><li>News</li></Link>
        </ul>
                </div>,document.getElementById("sidedrawer-hook")
    )
}

export default Sidedrawer