import React from "react";
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import {Link } from "react-router-dom"

const Footer = () =>{
    return(
        <div className="nav-container footer">
                <h1 style={{animation:"none"}}>AnimeClub</h1>
                <ul className="navlist2">
                    <li>About</li>
                    <Link to="/premium"><li>Premium</li></Link>
                    <li>Trending</li>
                    <li>Contact</li>
                </ul>
                <div>
                <ul className="followlinks">
                    <li><FontAwesomeIcon icon={faFacebook}/></li>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faTelegram} /></li>
                </ul>
                </div>
        
        </div>
    )
}


export default Footer;