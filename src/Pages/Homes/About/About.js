import React from "react";
import './About.css'


const About = () => {

  return <div className=" about-container row m-5">

        <div className=" col-12 col-md-3" >
        <h1><i className="fas fa-stethoscope "></i></h1>
          <h1>We Have:</h1>
          <h1>  300 Doctor</h1>

        </div>

        <div className=" col-12 col-md-3">
        <h1>We Have:</h1>
          <h1>50 Workers</h1>
        </div>

        <div className=" col-12 col-md-3">
        <h1>We Have:</h1>
          <h1>1000 Bad</h1>
          <h1>2 ICO</h1>
        </div>

        <div className=" col-12 col-md-3">
        <h1><i className="fas fa-ambulance"></i></h1>
        <h1>We Have:</h1>
        <h1>2 </h1>
        </div>
  </div>;
};

export default About;































