import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

import './Header.css'


const Header = () => {
  const {user, logOut} = useAuth();
  return <div className="headr-container">
    <div>
      <h1 className="websit-name">Welcome To Modern <span className="text-danger">Care</span> Hospital</h1>
    </div>
            
            <nav >
               <Link className="header-name" to=""><span>Modern</span> <span className="text-danger">Care</span></Link>
                 <Link className="header-link" to="/homes">Home</Link>
                 <Link className="header-link" to="/doctors">Doctors</Link>
                 <Link className="header-link" to="/about">About</Link>
                {
                  user.email ?
                  <button className="header-link" onClick={logOut}>Log-Out</button>
                  :
                  <Link className="header-link" to="/login">Log-In</Link>}
                  <span>{user.displayName}</span>
                 

                             
            </nav>
                 
  </div>;
};

export default Header;
