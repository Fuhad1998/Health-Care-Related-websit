import React from "react";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
  return <div className="login-form-container">
                 <div className="login-form">
      <h1>Log-in</h1>
      <form className="form" onSubmit="">
        <input className="input-form" type="email" name="" id="" placeholder="Your email"/>
        <br />
        <input className="input-form" type="password" name="" id="" placeholder="password"/>
        <br />
        <input className="button-reg" type="submit" value="submit" />
      </form>
      <p>New to Log-in? <Link to="/register">Creat Account</Link></p>
      <div className="form">
                      <button className="button-reg ">Google Sign-In</button>
      </div>
    </div>     
  </div>;
};

export default Login;
