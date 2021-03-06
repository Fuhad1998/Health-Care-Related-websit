import React from "react";

const Doctor = (props) => {
  const { name, img, description } = props.doctor;
  return (
    
      <div className="  col-12 col-md-4  g-4">
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    
  );
};

export default Doctor;
