import React, { useState } from "react";
import "./Contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


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
                <div onClick={showhandler} style={{cursor:"pointer"}}>
                    <FontAwesomeIcon className="headericons" icon={faTimes} />
                </div>
            </h1>
            <div className="chat">
                    <div className="usermessage">Hi There!</div>
                    <div className="adminmessage">hello</div>
            </div>
            <div className="inputbox">
                <input type="text" placeholder="Type your message Here"></input>
                <div className="sendbtn"><FontAwesomeIcon icon={faPaperPlane} /></div>
            </div>
        </div>
        </>
    )
}

export default Contact