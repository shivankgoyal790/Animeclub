import React from "react";
import "./Newscard.css"
import Logo from "../../images/zoro.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

const Newscard = (props) =>{    
    return(
        <div className="newscard">
                <div className="imagecontainer">
                <img src={Logo}  alt="zoro"></img>
                </div>
                <div className="newscontainer">
                <h1 className="headline">{props.headline}</h1>
                <br></br>
                <p className="news">{props.description}</p>
                 <button className="like">
                 <FontAwesomeIcon className="icon" icon={faHeart} />&nbsp;Like&nbsp;
                 <span className="count">{props.likescount}</span>
                 </button>
                 </div>


        </div>
    )
}

export default Newscard