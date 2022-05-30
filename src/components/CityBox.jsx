import React from "react";

const CityBox = ({ image, city }) => (
  <div className="city_box">
    <img src={image} width="100%" alt={city} />
    <span>{city}</span>
  </div>
);

export default CityBox;
