import React from "react"
import Mainnav from "../Mainnav"
import News from "./News"

const Allnews = () =>{
    return(
        <div>
                <div className="streamheader"><Mainnav /></div>
                <News allnews/>
        </div>
    )
}

export default Allnews