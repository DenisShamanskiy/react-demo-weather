const axios = require("axios").default;

export async function сurrentWeatherAPI(latitude, longitude) {
  try {
    const response = await axios({
      url: "https://api.openweathermap.org/data/2.5/weather",
      params: {
        lat: latitude,
        lon: longitude,
        units: "metric",
        lang: "ru",
        appid: process.env.REACT_APP_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function oneCallAPI(latitude, longitude) {
  try {
    const response = await axios({
      url: "https://api.openweathermap.org/data/2.5/onecall",
      params: {
        lat: latitude,
        lon: longitude,
        exclude: "minutely",
        units: "metric",
        lang: "ru",
        appid: process.env.REACT_APP_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function airPollutionAPI(latitude, longitude) {
  try {
    const response = await axios({
      url: "https://api.openweathermap.org/data/2.5/air_pollution",
      params: {
        lat: latitude,
        lon: longitude,
        appid: process.env.REACT_APP_API_KEY,
      },
    });
    return response.data.list[0];
  } catch (error) {
    console.error(error);
  }
}

export async function geocodingAPI(city) {
  try {
    const response = await axios({
      url: "https://api.openweathermap.org/geo/1.0/direct",
      params: {
        q: city,
        limit: 1,
        appid: process.env.REACT_APP_API_KEY,
      },
    });
    const { lat, lon } = response.data[0];
    return [lat, lon];
  } catch (error) {
    console.error(error);
  }
}
