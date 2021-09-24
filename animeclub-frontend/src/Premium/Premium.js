import React from "react";
import "./Premium.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Mainnav from "../Shared/Mainnav";
const Premium = () =>{

    return(
        <>
      
        <div className="streamheader"><Mainnav /></div>
        <div className="premium-card-container">
        <div className="already_premium" style ={{display:"none"}}>
            <h1>You are already a Premium User</h1>
        </div>
            <div className="premium-card">
            <h1 className="mysitelogo">AnimeClub</h1>
            <h1 className="pricetag"><FontAwesomeIcon className="price" icon={faRupeeSign} />99</h1>
            <p>Validity : 1 Month</p> 
            <hr/>
            <ul className="benifits">
            <li>Ads Free</li>
            <li>Stream All movies and Anime</li>
            <li>Download All Available Content</li>
            </ul>
            <button className="watch-button">Buy Premium</button>
            </div>

            <div className="premium-card">
            <h1 className="mysitelogo">AnimeClub</h1>
            <h1 className="pricetag"><FontAwesomeIcon className="price" icon={faRupeeSign} />299</h1>
            <p>Validity : 6 Months</p> 
            <hr/>
            <ul className="benifits">
           
            <li>Ads Free</li>
            <li>Stream All movies and Anime</li>
            <li>Download All Available Content</li>
            </ul>
            <button className="watch-button">Buy Premium</button>
            </div>
            
        </div>
        </>
    )
}

export default Premium