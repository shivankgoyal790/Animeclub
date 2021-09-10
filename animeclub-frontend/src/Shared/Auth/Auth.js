import React, {useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../AuthContext";
import "./Auth.css"
import { VALIDATOR_EMAIL ,VALIDATOR_REQUIRE,validate ,VALIDATOR_MINLENGTH } from "../validators";

const Auth = (props) =>{
    const auth = useContext(AuthContext);
    const History = useHistory();
    const [Newvalue,setvalue] = useState({name:"",email:"",password:""});
    const [isSignup ,setisSignup] = useState(props.issignup);
    const [isvalidemail , setvalidemail] = useState(true);
    const [isvalidpass ,setvalidpass] = useState(true);
    const [isvalidname , setvalidname] = useState(true);
    const togglehandler = () =>{
            if(isSignup){
                setisSignup(false);
                History.push("/signin");
                setvalue({name:"",email:"",password:""});
                setvalidemail(true);
                setvalidname(true);
                setvalidpass(true);
            }
            else{

                setisSignup(true);
                History.push("/signup");
                setvalue({name:"",email:"",password:""});
                setvalidemail(true);
                setvalidname(true);
                setvalidpass(true);
            }

    }

    const inputhandler = (event) =>{
        const value = event.target.value;
        const name = event.target.name;

        setvalue((prev) => {
        if(name === "name"){
                return(
                    {
                        name: value,
                        email:prev.email,
                        password:prev.password
                    })
                
            }
        
        if(name === "email"){
                return(
                    {
                        name: prev.name,
                        email:value,
                        password:prev.password
                    })
                
            }
        if(name === "password"){
                return(
                    {
                        name: prev.name,
                        email:prev.email,
                        password:value
                    }
                )
            }
        
    })
}

    const submithandler = async (event) =>{
        event.preventDefault();
        setvalidname(true);
        setvalidpass(true);
        setvalidemail(true);
        const valid1 = validate(Newvalue.name , [VALIDATOR_REQUIRE()]);
        const valid2 = validate(Newvalue.email,[VALIDATOR_EMAIL()])
        const valid3 = validate(Newvalue.password,[VALIDATOR_MINLENGTH(6)]);
            if(!valid1){    
            setvalidname(false);
            }        
            if(!valid2){
                setvalidemail(false);
            }        
            if(!valid3){
                setvalidpass(false);
            }
        
            if(!isSignup){

                try{
                const response = await fetch("http://localhost:5000/users/login",{
                    method : "POST",
                    headers : {'Content-Type' : 'application/json'},
                    body : JSON.stringify({
                        email : Newvalue.email,
                        password : Newvalue.password
                    })

                   
                });
                const responsedata = await response.json();

                if(!response.ok){
                    console.log("cannot find user");
                    throw new Error("check credentials");
                }
                else{
                    auth.login(responsedata.user.id);
                }

            }catch(err){

            }

            }
        auth.login();
        History.push("/");
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
                
                <p className="toggle">Already Have an Account?&nbsp;
                <span onClick={togglehandler} className="switch">{!isSignup ? "Sign Up" : "Sign In"}</span>
                </p>
                </form>
            </div>
        </div>
       </div>
   )   
}

export default Auth