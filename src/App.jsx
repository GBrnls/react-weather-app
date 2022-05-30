import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./helpers/Themes";

import { useOpenWeatherApi } from "./api/OpenWeather";
import { useUnsplashApi } from "./api/Unsplash";

import SideBar from "./layouts/SideBar";
import Main from "./layouts/Main";

export default function App() {
  const [loading, setLoading] = useState(true);

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [
    weather,
    city,
    fetchWeather,
    fetchWeatherByLocation
  ] = useOpenWeatherApi();
  const image = useUnsplashApi();

  const [userInput, setUserInput] = useState();
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handlePress = (e) => {
    if (e.key === "Enter") {
      if (userInput !== undefined) {
        console.log(userInput);
      }
    }
  };

  if (weather) {
    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="App" onKeyPress={handlePress}>
          <SideBar
            data={weather}
            userInput={userInput}
            handleChange={handleChange}
            image={image}
            city={city}
          />
          <Main data={weather} themeToggler={themeToggler} />
        </div>
      </ThemeProvider>
    );
  }

  if (loading) {
    return (
      <div>
        <h1>Weather Forecast is loading...</h1>
      </div>
    );
  }
}
