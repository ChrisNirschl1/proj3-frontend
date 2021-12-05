
import React, { useState, useEffect } from 'react';
import API from "./utils/API"
//will need useEffect for token
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";


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
    password: ""
  })

  const [signupFormState, setSignupFormState] = useState({
    email: "",
    password: ""
  })
  //Token validation function
  useEffect(() => {
    const myToken = localStorage.getItem("token");
    if (myToken) {
      API.getProfile(myToken).then(res => {
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

  const handleSignupChange = event => {
    if (event.target.name === "email") {
      setSignupFormState({
        ...signupFormState,
        email: event.target.value
      })
    } else {
      setSignupFormState({
        ...signupFormState,
        password: event.target.value
      })
    }
  }


  const handleLoginSubmit = e => {
    e.preventDefault();
    API.login(loginFormState).then(res => {
      console.log(res.data)
      setUserState({
        email: res.data.user.email,
        id: res.data.user._id
        //could need to be id
        // was res.data.user.email,
        //was _id
      })
      //token
      setToken(res.data.token)
      localStorage.setItem("token", res.data.token)
    }).catch(err => {
      console.log(err)
    })

  }

  const handleSignupSubmit = e => {
    e.preventDefault();
    API.signup(signupFormState).then(res => {
      API.login(signupFormState).then(res => {
        console.log(res.data)
        setUserState({
          email: res.data.user.email,
          id: res.data.user._id
          //could need to be id
          // was res.data.user.email,
        })
        //token
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
      }).catch(err => {
        console.log(err)
      })
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

      {!userState.email ? (

        <div>
          <LoginForm submit={handleLoginSubmit} change={handleLoginChange} loginState={loginFormState} />

          <SignupForm submit={handleSignupSubmit} change={handleSignupChange} signupState={signupFormState} />
        </div>
      ) : (
        <div>
          <nav>
            <ul>

              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/newpost">New Post</Link>
              </li>

              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <button onClick={logMeOut}>Log out</button>
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



    </Router>
  );
}




export default App;

  //<Register/>

