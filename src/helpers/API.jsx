// THIS PART WILL GIVE US ACCES TO OPENWEATHER & UNSPLASH API TO FETCH SOME DATA//

//* OPEN WEATHER KEYS & SEARCH*//
export const API_OPENWEATHER = process.env.REACT_APP_API_KEY_OPENWEATHER;
export const URL_OPENWEATHER =
  "https://api.openweathermap.org/data/2.5/weather";

export const DEFAULT_URL = `${URL_OPENWEATHER}/?APPID=${API_OPENWEATHER}&lat=43.6043&lon=1.4437`;
export const DEFAULT_NEXT_DAYS = `https://api.openweathermap.org/data/2.5/onecall?lat=43.6043&lon=1.4437&exclude=minutely&appid=${API_OPENWEATHER}`;

export const SEARCH_BY_NAME = `${URL_OPENWEATHER}/?APPID=${API_OPENWEATHER}&q=`;
export const SEARCH_BY_LOCATION = `${URL_OPENWEATHER}?appid=${API_OPENWEATHER}`; //&lat={lat}&lon={lon}
export const SEARCH_NEXT_DAYS = `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&appid=${API_OPENWEATHER}`; //&lat={lat}&lon={lon}

//* UNSPLASH KEYS & SEARCH*//
export const API_UNPSLASH = process.env.REACT_APP_API_KEY_UNSPLASH;
export const URL_UNSPLASH = "https://api.unsplash.com/search/photos";

export const SEARCH_BY_WORD = `${URL_UNSPLASH}?client_id=${API_UNPSLASH}&page=1&query=`;
export const SEARCH_DEFAULT = `${URL_UNSPLASH}?client_id=${API_UNPSLASH}&page=1&query=toulouse`;
