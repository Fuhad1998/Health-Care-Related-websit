import React from "react";
import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {
  return <div className="headr-container">
    <div>
      <h1 className="websit-name">Welcome To Modern <span className="text-danger">Care</span> Hospital</h1>
    </div>
            
            <nav >
               <Link className="header-name" to=""><span>Modern</span> <span className="text-danger">Care</span></Link>
                 <Link className="header-link" to="/homes">Home</Link>
                 <Link className="header-link" to="/services">Services</Link>
                 <Link className="header-link" to="/doctors">Doctors</Link>
                 <Link className="header-link" to="/about">About</Link>
                 <Link className="header-link" to="/register">Register</Link>
                 

                             
            </nav>
                 
  </div>;
};

export default Header;
