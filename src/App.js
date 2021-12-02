import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
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
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}




export default App;

  //<Register/>