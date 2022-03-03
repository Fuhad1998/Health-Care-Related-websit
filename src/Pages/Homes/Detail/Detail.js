import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Detail.css'

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const {id} = useParams();
  useEffect(()=>{
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setDetail(data?.slice(0, 6)))
  }, [])
const item = detail.find(pd=> pd.id == id) 
  return (
    <div className="detail-container container">
      <img src={item?.img} alt="" />
      <h2>{item?.detele}</h2>

  
    </div>
  );
};

export default Detail;
