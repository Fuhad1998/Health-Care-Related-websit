import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container ">
      <div className="footer-section">
        <div>
        <h1>Opening Hours</h1>
        <h4>Outdoor Serviece</h4>
        <h5>Saturday to Friday</h5>
        <h6><i className="far fa-clock text-primary"></i> 09:00 am - 10.00 pm</h6>
        <h4>Emergency </h4>
        <h5>Open 24 Hours</h5>
        </div>
        <div>
          <h1>About Us</h1>
          <p>We Provide Essential Services For Your Health Care</p>
          <p>24 Hours Emergency Assistance Call Us</p>
          <p>We are committed to providing healthcare service</p>
      

        </div>
        <div>
          <h1>Contact Us</h1>
          <p><i className="fas fa-map-marker"></i> 59 Start 200 Dhaka</p>
          <p><i className="fas fa-envelope"></i> fuwadrere444@gmIl.com</p>
          <p><i className="fas fa-phone"></i> +013456667</p>

        </div>
      </div>
    <div className="mt-5">
    <h2>Follow Us<i className="fab fa-facebook-f m-3 text-primary"></i><i className=" text-primary fab fa-twitter m-3"></i><i class="fab fa-instagram m-3 text-danger"></i><i className="fab fa-youtube m-3 text-danger"></i></h2>
    </div>
    <div >
      <p><i className="fas fa-copyright mb-5"></i> Copyright 2021 By Fuwad Hossian</p>
    </div>
    </div>
  );
};

export default Footer;
