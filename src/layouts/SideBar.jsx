import React from "react";
import { StyledSideBar } from "../styles/SideBarStyles";

import SearchBar from "../components/SearchBar";
import CityBox from "../components/CityBox";
import WeatherBox from "../components/WeatherBox";

const Sidebar = ({ image, userInput, handleChange, data, city }) => (
  <StyledSideBar>
    <h1>Weather Forecast</h1>
    <h2>in</h2>
    <CityBox image={image} city={city} />
    <SearchBar userInput={userInput} handleChange={handleChange} />
    <WeatherBox data={data.current} icon={data.current.weather[0].icon} />
  </StyledSideBar>
);

export default Sidebar;
