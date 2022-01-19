import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";

function App() {
  const [latitude, setLatitude] = useState(59.89444);
  const [longitude, setLongitude] = useState(30.26417);
  const [data, setData] = useState([]);

  function getWeatherCity(city) {
    console.log(city);
    fetch(
      `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  }

  // console.log(`Широта: ${latitude}`);
  // console.log(`Долгота: ${longitude}`);

  function getGeolocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    getWeatherGeolocation();
  }

  function getWeatherGeolocation() {
    fetch(
      `${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}&lang=ru`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }

  useEffect(() => {
    // getGeolocation();
    getWeatherGeolocation();
  }, [latitude, longitude]);

  return (
    <div className="main">
      <button onClick={() => getGeolocation()}>Получить геолокацию</button>
      <button onClick={() => getWeatherGeolocation()}>#2</button>

      {typeof data.main != "undefined" ? (
        <WeatherCard data={data} search={getWeatherCity} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
