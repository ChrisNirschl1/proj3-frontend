
import React, { useState, useEffect } from 'react';
//will need useEffect for token
import LoginForm from "./components/LoginForm";
// const Axios = require ("axios"); 
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from "./pages/home/Home";
//import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
// import Register from "./pages/register/Register";


function App() {
  const [userState, setUserState] = useState({
    email: "",
    id: 0
    //was password instead of id
  })
  //token
  const [token, setToken] = useState("")

  const [loginFormState, setLoginFormState] = useState({
    email: "",
    password: "",
  })
  //Token validation function
  useEffect(() => {
    const myToken = localStorage.getItem("token");
    if (myToken) {
      axios.get("http://localhost:3001/profile", {
        headers: {
          "Authorization": `Bearer ${myToken}`
        }
      }).then(res => {
        console.log("----------", res)
        setToken(myToken)
        setUserState({
          email: res.data.email,
          id: res.data.id
        })
      }).catch(err => {
        console.log(err)
        // localStorage.removeItem("token")
      })
    }
  }, [])

  const handleLoginChange = event => {
    if (event.target.name === "email") {
      setLoginFormState({
        ...loginFormState,
        email: event.target.value
      })
    } else {
      setLoginFormState({
        ...loginFormState,
        password: event.target.value
      })
    }
  }


  const handleLoginSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", loginFormState).then(res => {
      console.log(res.data)
      setUserState({
        email: res.data.user.email,
        id: res.data.user._id
        //could need to be id
      })
      //token
      setToken(res.data.token)
      localStorage.setItem("token", res.data.token)
    }).catch(err => {
      console.log(err)
    })

  }

  const logMeOut = () => {
    setUserState({ email: '', id: 0 })
    //token
    setToken("");
    localStorage.removeItem("token")

  }

  return (

    <Router>

      <div>
        {!userState.email ? (
          <div>
            <LoginForm submit={handleLoginSubmit} change={handleLoginChange} loginState={loginFormState} />
          </div>
        ) : (
          <div>
            <nav>
              <ul>
                <button onClick={logMeOut}>Log out</button>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/newpost">New Post</Link>
                </li>
               
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/">
                <Home token={token} user={userState} />
              </Route>
              
              <Route exact path="/profile">
                <Profile token={token} user={userState} />
              </Route>
            </Switch>
          </div>)}

      </div>
    </Router>
  );
}




export default App;

  //<Register/>