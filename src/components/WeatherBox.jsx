import React from "react";
import {
  convertC,
  convertLongDay,
  convertShortTime
} from "../helpers/Converters";

const WeatherBox = ({ data, icon }) => (
  <div className="weather_box">
    <div className="main">
      <img src={require(`../icons/${icon}.png`)} width="150" alt="weather" />
      <span>{convertC(data.temp).toFixed(0)}°C</span>
    </div>
    <div className="date">
      <span className="day">{convertLongDay()}</span>,{" "}
      <span className="hours">{convertShortTime()}</span>
    </div>
    <div className="aside">
      <span>🌡️ Feels like {convertC(data.feels_like).toFixed(0)}°C</span>
      <br />
      <span>☁️ {data.clouds}% Cloudy</span>
    </div>
  </div>
);

export default WeatherBox;
