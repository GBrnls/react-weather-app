import { useState, useEffect } from "react";
import {
  DEFAULT_URL,
  DEFAULT_NEXT_DAYS,
  SEARCH_BY_NAME,
  SEARCH_BY_LOCATION,
  SEARCH_NEXT_DAYS
} from "../helpers/API";
import { convertTime } from "../helpers/Converters";

export const useOpenWeatherApi = (searchCity, lat = "", lon = "") => {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");

  const fetchWeather = async (URL) => {
    try {
      const result = await (await fetch(URL)).json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDefaultWeather = () => {
    fetchWeather(`${DEFAULT_URL}`).then((res) => {
      if (res != null) {
        setWeather({ city: res.name, country: res.sys.country });
      }
    });
    fetchWeather(`${DEFAULT_NEXT_DAYS}`).then((res) => {
      setWeather((prev) => ({
        ...prev,
        daily: res.daily,
        hourly: res.hourly,
        current: res.current
      }));
    });
  };

  const fetchWeatherByLocation = (name) => {
    if (name) {
      fetchWeather(`${SEARCH_BY_NAME}&q=${name}`).then((res) => {
        console.log(res);
        setWeather(res);
      });
    }
  };

  useEffect(() => {
    fetchWeather(`${DEFAULT_URL}`).then((res) => {
      if (res != null) {
        setCity(res.name + ", " + res.sys.country);
      }
    });

    fetchWeather(`${DEFAULT_NEXT_DAYS}`).then((res) => {
      if (res != null) {
        setWeather({
          daily: res.daily,
          hourly: res.hourly,
          current: res.current
        });
      }
    });
  }, []);

  return [weather, city, fetchWeather, fetchWeatherByLocation];
};
