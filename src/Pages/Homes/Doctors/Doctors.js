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
    {
      doctor.map(doctor =><Doctor key={doctor.id} doctor={doctor}></Doctor>)
    }
  </div>;
};

export default Doctors;
