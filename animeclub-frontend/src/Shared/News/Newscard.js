import React, { useContext, useEffect, useState } from "react";
import "./Newscard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {AuthContext} from "../../AuthContext"
import { useHistory } from "react-router";
const Newscard = (props) =>{    
    const [likes , setlikes] = useState(props.likescount);
    const Auth = useContext(AuthContext);
    const History = useHistory();
    useEffect(()=>{

        const likehandler = async () =>{
            try{
                    await fetch(`http://localhost:5000/news/like/${props.id}`,{
                        method :'PATCH',
                        headers : {'Content-Type' : 'application/json'}, 
                        body : JSON.stringify({
                            likescount : likes
                        })
                    })
                }
                catch(err){
                    console.log(err);
                }
        }

        likehandler();
    },[props.id,likes])

    const updatelikehandler = () =>{
        if(Auth.isLoggedIn)
        setlikes(likes + 1);
        else{
            History.push("/signin")
        }
    }
    return(
        <div className="newscard">
                <div className="imagecontainer">
                <img src={`http://localhost:5000/${props.image}`}  alt="zoro"></img>
                </div>
                <div className="newscontainer">
                <h1 className="headline">{props.headline}</h1>
                <br></br>
                <p className="news">{props.description}</p>
                 <button className="like" onClick={updatelikehandler}>
                 <FontAwesomeIcon className="icon" icon={faHeart} />&nbsp;Likes&nbsp;
                 <span className="count" >{likes}</span>
                 </button>
                 </div>


        </div>
    )
}

export default Newscard