import React from "react";
import "./Auth.css"

const Auth = () =>{
   return(
       <div className="auth-background">
        <div className="backshadow">

        </div>
        <div className="auth-container">
            <div className="logo-container">
                <h1 className="company-logo">AnimeClub</h1>
            </div>
            <div className="auth">
                <h1 className="auth-logo">Authenticate</h1>
                <input 
                type="text"
                placeholder="Enter Your Name">
                </input>
                <input 
                type="text"
                placeholder="Email">
                </input>
                <input 
                type="password"
                placeholder="Password">
                </input>
                <button className="signup btn">Sign Up</button>
                <p className="toggle">Already Have an Account?&nbsp;<span className="switch">Sign In</span></p>
            </div>
        </div>
       </div>
   )   
}

export default Auth