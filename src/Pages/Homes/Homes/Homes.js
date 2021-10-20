import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import banner1 from "../../../images/banner/download (1).jfif";
import banner2 from "../../../images/banner/download.jfif";
import banner3 from "../../../images/banner/images.jfif";


const Homes = () => {
  const [service, setService] = useState([]);
  useEffect(()=>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setService(data?.slice(0, 6)))
  }, [])

  return <div>
    <div>
    <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner1} className="d-block w-100" alt="..." />
            </div>
            <div classNane="carousel-item">
              <img src={banner2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={banner3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div >
         
        <div className="row">
        {
            service.map(service =><Home service={service}></Home>)
          }
        </div>
  </div>;
};

export default Homes;
