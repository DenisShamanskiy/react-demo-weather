const axios = require("axios").default;

const API_KEY = "308668a1e7aa8a2725ddb201e281ebeb"

export async function сurrentWeatherAPI(latitude: number, longitude: number) {
  try {
    const response = await axios({
      url: "https://api.openweathermap.org/data/2.5/weather",
      params: {
        lat: latitude,
        lon: longitude,
        units: "metric",
        lang: "ru",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function oneCallAPI(latitude: number, longitude: number) {
  try {
    const response = await axios({
      url: "https://api.openweathermap.org/data/2.5/onecall",
      params: {
        lat: latitude,
        lon: longitude,
        exclude: "minutely",
        units: "metric",
        lang: "ru",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function airPollutionAPI(latitude: number, longitude: number) {
  try {
    const response = await axios({
      url: "https://api.openweathermap.org/data/2.5/air_pollution",
      params: {
        lat: latitude,
        lon: longitude,
        appid: API_KEY,
      },
    });
    return response.data.list[0];
  } catch (error) {
    console.error(error);
  }
}

export async function geocodingAPI(city: string): Promise<Array<number>> {
  try {
    const response = await axios({
      url: "https://api.openweathermap.org/geo/1.0/direct",
      params: {
        q: city,
        limit: 1,
        appid: API_KEY,
      },
    });
    const { lat, lon } = response.data[0];
    return [lat, lon];
  } catch (error) {
    console.error(error);
  }
  return []
}
