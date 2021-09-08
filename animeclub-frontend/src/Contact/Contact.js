import React from "react";
import "./Contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Contact = () =>{
    return(
        <div className="contact-container">
                <FontAwesomeIcon className="message" icon={faCommentDots} />
        </div>
    )
}

export default Contact