import React from "react"
import Newscard from "./Newscard"
import "./Newslist.css"

const Newslist = (props) =>{
return(
    <>
        {props.items.map(curr =>(
            
            <Newscard
                key = {curr.id}
                id = {curr.id}
                likescount = {curr.likescount}
                description = {curr.description}
                headline = {curr.headline}
            />
            ))
        }

             

        
    </>
)
}

export default Newslist