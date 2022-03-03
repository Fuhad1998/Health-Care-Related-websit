import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {

  const { name, img, description, id } = props.service;
  return (
    <div className="  col-12 col-md-4  g-4">
    <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <button className="button-reg"><Link to={`/detail/${id}`} className="detail">Detail</Link></button>
      </div>
    </div>
  </div>
  );
};

export default Home;


