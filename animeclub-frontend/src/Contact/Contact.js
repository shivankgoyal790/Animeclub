import React, { useState } from "react";
import "./Contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";


const Contact = () =>{
    const[showicon ,setshowicon] = useState(true);
    const showhandler =() =>{
        if(showicon)
        setshowicon(false);
        else
        setshowicon(true);

    }
    return(
        <>
        <div className="contact-container" onClick={showhandler} style={{display: showicon ? "block" : "none"}}>
                <FontAwesomeIcon className="message" icon={faCommentDots} />
        </div>
        <div className="messagebox" style={{display: !showicon ? "block" : "none"}}>
            <h1 className="messagebox-header">
                <div>Chatbot</div>
                <div>
                    <FontAwesomeIcon className="headericons" icon={faWindowClose} />
                </div>
            </h1>
            <div className="chat">

            </div>
            <div className="inputbox">
                <input type="text" placeholder="enter your message"></input>
            </div>
        </div>
        </>
    )
}

export default Contact