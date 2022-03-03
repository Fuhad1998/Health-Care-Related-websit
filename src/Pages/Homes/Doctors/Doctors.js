import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctor, setDoctor] = useState([]);
  useEffect(()=>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data =>setDoctor(data?.slice(6, 12)))
  }, [])
  return <div>
    <h1 className="text-danger mt-2">Our Doctors</h1>
    <div className="container">
   <div className="row">
   {
      doctor.map(doctor =><Doctor key={doctor.id} doctor={doctor}></Doctor>)
    }
   </div>
  </div>
  </div>;
};

export default Doctors;
