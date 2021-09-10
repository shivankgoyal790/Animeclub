import './App.css';
import Mainheader from "./Shared/Mainheader";
import News from "./Shared/News/News"
import Footer from "./Shared/Footer"
import { BrowserRouter as Router, Route , Switch, Redirect } from "react-router-dom";
import Anime from './Anime/Anime';
import Movie from './Anime-movie/Movie';
import Auth from "../src/Shared/Auth/Auth"
import Premium from './Premium/Premium';
import Allnews from './Shared/News/AllNews';
import { useCallback, useState } from 'react';
import  {AuthContext } from '../src/AuthContext';

const App = () => {
 
const [isLoggedIn,setisLoggedIn] = useState(false);
const [userid,setuserid] = useState(false); 
const login = useCallback((uid) => {
    setisLoggedIn(true);
    setuserid(uid);

  },[]);  


const logout = useCallback(()=>{
    setisLoggedIn(false);
  },[]
);

//   let routes;

//   if(!isLoggedIn){
//      routes = (
//       <Switch>
//       <Route path="/" exact>
//    <Mainheader/>
//    <News/>
//    <Footer/>
//  </Route>
//  <Route path="/stream" exact><Anime /></Route>
//  <Route path="/signup" exact><Auth issignup = {true}/></Route>
//  <Route path="/signin" exact><Auth issignup ={false}/></Route>
//  <Route path="/movies" exact><Movie/></Route>
//  <Route path="/premium" exact><Premium /></Route>
//  <Route path="/news" exact><Allnews /></Route>
//  <Redirect to="/"></Redirect>
//  </Switch>
//      )

//   }

//   else{
//     routes = (
//       <Switch>
//           <Route path="/" exact>
//         <Mainheader/>
//         <News/>
//         <Footer/>
//       </Route>
//       <Route path="/stream" exact><Anime /></Route>
//       <Route path="/signup" exact><Auth issignup = {true}/></Route>
//       <Route path="/signin" exact><Auth issignup ={false}/></Route>
//       <Route path="/movies" exact><Movie/></Route>
//       <Route path="/premium" exact><Premium /></Route>
//       <Route path="/news" exact><Allnews /></Route>
//       <Redirect to="/"></Redirect>
//       </Switch>
//     )
//   }

  return (
    <AuthContext.Provider value={ {isLoggedIn:isLoggedIn ,userid: userid, login:login , logout:logout }}>
    <Router>
    <Switch>
           <Route path="/" exact>
        <Mainheader/>
        <News/>
        <Footer/>
      </Route>
      <Route path="/stream" exact><Anime /></Route>
      {/* <Route path="/Auth" exact><Auth issignup = {true}/></Route> */}
      <Route path="/signup" exact><Auth issignup/></Route>
      <Route path="/signin" exact><Auth/></Route>
      <Route path="/movies" exact><Movie/></Route>
      <Route path="/premium" exact><Premium /></Route>
      <Route path="/news" exact><Allnews /></Route>
      <Redirect to="/"></Redirect>
      </Switch>
    </Router>    
    </AuthContext.Provider>
  );
}

export default App;
