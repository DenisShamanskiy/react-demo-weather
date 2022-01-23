// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
//import WeatherAlert from "./components/AlertWeather/AlertWeather";
import CardWeather from "./components/CardWeather/CardWeather";
import CardWeatherList from "./components/CardWeatherList/CardWeatherList";
import Loader from "./components/Loader";
import Search from "./components/Search/Search";
import CardWeatherInfo from "./components/CardWeatherInfo/CardWeatherInfo";

function App() {
  const [latitude, setLatitude] = useState(59.89444);
  const [longitude, setLongitude] = useState(30.26417);
  const [dataWeather, setDataWeather] = useState([]);
  const [data5DayWeather, set5DayWeather] = useState([]);

  function getWeatherCity(city) {
    fetch(
      `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    )
      .then((res) => res.json())
      .then((result) => {
        setDataWeather(result);
        // console.log(result);
      });
    get5DayWeather(city);
  }

  function get5DayWeather(city) {
    fetch(
      `${process.env.REACT_APP_API_URL}/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    )
      .then((res) => res.json())
      .then((result) => {
        set5DayWeather(result);
        // console.log(result);
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
        setDataWeather(result);
      });
    fetch(
      `${process.env.REACT_APP_API_URL}/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}&lang=ru`
    )
      .then((res) => res.json())
      .then((result) => {
        set5DayWeather(result);
        //console.log(result);
      });
  }

  useEffect(() => {
    // getGeolocation();
    getWeatherGeolocation();
  }, [latitude, longitude]);

  return (
    <div className="main">
      {typeof dataWeather.main != "undefined" ? (
        <CardWeather dataWeather={dataWeather} search={getWeatherCity} />
      ) : (
        <Loader />
      )}
      <Search search={getWeatherCity} />
      {typeof data5DayWeather.list != "undefined" ? (
        <CardWeatherList dataWeather={data5DayWeather} />
      ) : (
        <Loader />
      )}
      {typeof dataWeather.main != "undefined" ? (
        <CardWeatherInfo dataWeather={dataWeather} />
      ) : (
        <Loader />
      )}

      <button onClick={() => getGeolocation()}>Получить геолокацию</button>
      <button onClick={() => getWeatherGeolocation()}>#2</button>
    </div>
  );
}

export default App;
