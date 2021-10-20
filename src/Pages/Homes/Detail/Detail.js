import React, { useEffect, useState } from "react";

const Detail = () => {
                    const [detail, setDetail] = useState([]);
                    useEffect(() => {
                                        fetch('./data.json')
                                        .then(res => res.json())
                                        .then(data => setDetail(data))
                    }, [])
  return <div>
                      <h1>this is detail</h1>
  </div>;
};

export default Detail;
