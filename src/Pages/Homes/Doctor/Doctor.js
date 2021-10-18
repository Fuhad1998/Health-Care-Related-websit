import React from "react";

const Doctor = (props) => {
   
const {name, img, description} = props.doctor
  return (
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                      <div class="card h-100">
                        <img src={img}class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">{name}</h5>
                          <p class="card-text">{description}</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>
                    </div>
                  
                  
                  </div>
  );
};

export default Doctor;
