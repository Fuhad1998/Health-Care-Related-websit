import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return <div className="login-form-container">
    <div className="login-form">
      <h1>Register</h1>
      <form className="form" >
        <input className="input-form" type="email" name="" id="" placeholder="Your email"/>
        <br />
        <input className="input-form" type="password" name="" id="" placeholder="password"/>
        <br />
        <input className="button-reg" type="submit" value="submit" />
      </form>
      <p>Already have an account? <Link to="/login">Log-In</Link></p>
      <div className="form">
                      <button className="button-reg ">Google Sign-In</button>
      </div>
    </div>
  </div>;
};

export default Register;
