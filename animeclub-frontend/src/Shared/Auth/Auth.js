import React, { useState } from "react";
import "./Auth.css"

const Auth = (props) =>{
    const [Newvalue,setvalue] = useState({name:"",email:"",password:""});
    const [isSignup ,setisSignup] = useState(props.issignup);
    const togglehandler = () =>{
            if(isSignup){
                setisSignup(false);
            }
            else
            setisSignup(true);
    }

    const inputhandler = (event) =>{
        const value = event.target.value;
        const name = event.target.name;

        if(name === "name"){
            setvalue((prev) => {
                return(
                    {
                        name: value,
                        email:prev.value,
                        password:prev.password
                    }
                )
            })
        }
        if(name === "email"){
            setvalue((prev) => {
                return(
                    {
                        name: prev.name,
                        email:value,
                        password:prev.password
                    }
                )
            })
        }
        if(name === "password"){
            setvalue((prev) => {
                return(
                    {
                        name: prev.name,
                        email:prev.email,
                        password:value
                    }
                )
            })
        }
    }

    const submithandler = (event) =>{
        event.preventDefault();
        console.log("hi");
    }
   return(
       <div className="auth-background">
        <div className="auth-container">
            <div className="logo-container">
                <h1 className="company-logo">AnimeClub</h1>
            </div>
            <div className="auth">
                <h1 className="auth-logo">Authenticate</h1>
                <form onSubmit={submithandler} className="forminput">
                <input
                style={{display: isSignup ? "block" : "none"}} 
                type="text"
                name="name"
                value={Newvalue.name}
                onChange={inputhandler}
                placeholder="Enter Your Name">
                </input>
                <input 
                type="text"
                name="email"
                value={Newvalue.email}
                onChange={inputhandler}
                placeholder="Email">
                </input>
                <input 
                type="password"
                name="password"
                value={Newvalue.password}
                onChange={inputhandler}
                placeholder="Password">
                </input>
                <button type ="submit" className="signup btn">{isSignup ? "Sign Up" : "Sign In"}</button>
                </form>
                <p className="toggle">Already Have an Account?&nbsp;
                <span onClick={togglehandler} className="switch">{!isSignup ? "Sign Up" : "Sign In"}</span>
                </p>
            </div>
        </div>
       </div>
   )   
}

export default Auth