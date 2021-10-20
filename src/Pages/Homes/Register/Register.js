import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = getAuth();

 

const handelemailChange = e =>{
  setEmail(e.target.value)
}
const handelPasswordChange = e =>{
  setPassword(e.target.value)
}
const handerRegistration = e => {
  e.preventDefault()
  console.log(email, password)
  if(password.length < 6){
    setError('Password should be 6 characters')
    return
  }
  createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
    const user = result.user;
    console.log(user)
    setError('')
  })
  .catch(error => {
    setError(error.message)
  })
  
}


  return <div className="login-form-container">
    <div className="login-form"> 
      <h1>Register</h1>
      <form onSubmit={handerRegistration} className="form" >
        <input onBlur={handelemailChange} className="input-form" type="email" name="" id="" placeholder="Your email"/>
        <br />
        <input onBlur={handelPasswordChange}  className="input-form" type="password"  name="" id="" placeholder="password"/>
        <br />
        <div className="text-danger">{error}</div>
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
