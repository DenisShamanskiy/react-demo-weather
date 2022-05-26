const axios = require("axios").default;

const API_KEY = "308668a1e7aa8a2725ddb201e281ebeb"
const MY_TIMEOUT = 10000

function checkResponse(err: any): Promise<never>{
  if (err.response) {
    console.log("err.response", err.response);
    return Promise.reject(err);
  } else if (err.request) {
    console.log("err.request", err.request);
    return Promise.reject(err)
  } else {
    console.log('Error', err.message);
    return Promise.reject(err);
  }
}

export async function сurrentWeatherAPI(latitude: number, longitude: number): Promise<any> {
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
      timeout: MY_TIMEOUT
    });
    return response.data;
  } catch(err) {
    return checkResponse(err);
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
      timeout: MY_TIMEOUT
    });
    return response.data;
  } catch(err) {
    return checkResponse(err);
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
      timeout: MY_TIMEOUT
    });
    return response.data.list[0];
  } catch(err) {
    return checkResponse(err);
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
      timeout: MY_TIMEOUT
    });
    const { lat, lon } = response.data[0];
    return [lat, lon];
  } catch(err) {
    return checkResponse(err);
  } 
}