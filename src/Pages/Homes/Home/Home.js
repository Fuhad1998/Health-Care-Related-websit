import React from "react";
import "./Home.css";

const Home = (props) => {

  const { name, img, description } = props.service;
  return (
    <div>
      
      <div className="">
                       
                       <div className=" row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                      <div className="card h-100">
                        <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{name}</h5>
                          <p className="card-text">{description}</p>
                          <button className="button-reg">Description</button>
                        </div>
                      </div>
                    </div>
                  </div>
                      </div>
    </div>
  );
};

export default Home;
