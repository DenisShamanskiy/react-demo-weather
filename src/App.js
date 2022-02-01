// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import React, { useEffect, useState } from "react";
//import WeatherAlert from "./components/AlertWeather/AlertWeather";
import CardWeather from "./components/CardWeather/CardWeather";
import CardDaily from "./components/CardDaily/CardDaily";
import Loader from "./components/Loader";
import Search from "./components/Search/Search";
import CardWeatherInfo from "./components/CardWeatherInfo/CardWeatherInfo";
import CardHourly from "./components/CardHourly/CardHourly";

function App() {
  const [latitude, setLatitude] = useState();
  // console.log(`latitude ${latitude}`);
  const [longitude, setLongitude] = useState();
  // console.log(`longitude ${longitude}`);
  const [city, setCity] = useState("");
  // console.log(`Город ${city}`);
  const [currentWeather, setCurrentWeather] = useState();
  // console.log(currentWeather);
  const [currentOneCall, setCurrentOneCall] = useState({});
  // console.log(currentOneCall);
  const [dailyOneCall, setDailyOneCall] = useState();
  console.log(dailyOneCall);
  const [hourlyOneCall, setHourlyOneCall] = useState();
  // console.log(hourlyOneCall);
  const [timeZone, setTimeZone] = useState();
  // console.log(timeZone);
  const [alertsOneCall, setAlertsOneCall] = useState({});
  // console.log(alertsWeather);

  const [dataWeather, setDataWeather] = useState([]);
  const [data5DayWeather, set5DayWeather] = useState([]);
  const [er, setEr] = useState("");

  // Текущие координаты
  // async function getCurrentCoordinates() {
  //   const position = await new Promise((res, rej) => {
  //     navigator.geolocation.getCurrentPosition(res, rej);
  //   });
  //   // setLatitude(position.coords.latitude);
  //   // setLongitude(position.coords.longitude);
  // }

  // Основной запрос
  async function getWeatherByCoordinates() {
    const position = await new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    );
    const currentOneCall = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    );
    const {
      current: { uvi },
      daily,
    } = await currentOneCall.json();
    const dataCurrentWeather = await response.json();
    dataCurrentWeather.uvi = uvi;
    setCurrentWeather(dataCurrentWeather);
    setDailyOneCall(daily);
    getWeatherHourly(position.coords.latitude, position.coords.longitude);
  }

  // Поиск погоды по городу
  async function getCityWeather(city) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    );
    const {
      coord: { lat, lon },
      ...dataCityWeather
    } = await response.json();
    const currentOneCall = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    );
    const {
      current: { uvi },
    } = await currentOneCall.json();
    dataCityWeather.uvi = uvi;
    setCurrentWeather(dataCityWeather);
    const hourlyWeather = await fetch(
      `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    );
    const { hourly, timezone_offset } = await hourlyWeather.json();
    setTimeZone(timezone_offset);
    setHourlyOneCall(hourly.slice(0, 25));
  }

  // 1 час
  async function getWeatherHourly(lat, lon) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    );
    const { hourly, timezone_offset } = await response.json();
    setTimeZone(timezone_offset);
    setHourlyOneCall(hourly.slice(0, 25));
  }

  // 1 день
  async function getWeatherDaily(lat, lon) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    );
    const { daily, timezone_offset } = await response.json();
    // setTimeZone(timezone_offset);
    setDailyOneCall(daily);
  }

  async function getCoordinatesCity(city) {
    const position = await new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    );
    const {
      name,
      coord: { lat, lon },
    } = await response.json();
    console.log(lat, lon, name);
    // setLatitude(lat);
    // setLongitude(lon);
    // setCity(name);
  }

  async function getWeatherGeolocation() {
    if (latitude && longitude) {
      fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}&lang=ru`
      )
        .then((res) => res.json())
        .then((result) => {
          setDataWeather(result);

          // console.log(result);
        });
      fetch(
        `${process.env.REACT_APP_API_URL}/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}&lang=ru`
      )
        .then((res) => res.json())
        .then((result) => {
          set5DayWeather(result);
          // console.log(result);
        });
    }
  }

  useEffect(() => {
    // getGeolocation();
    // getWeatherGeolocation();
    // getWeatherCityOneCall();
    getWeatherByCoordinates();
  }, []);

  return (
    <div className="App">
      {currentWeather ? (
        <CardWeather currentWeather={currentWeather} />
      ) : (
        <Loader height={"239.641px"} />
      )}
      <Search search={getCityWeather} />

      {hourlyOneCall ? (
        <CardHourly hourlyWeather={hourlyOneCall} timeZone={timeZone} />
      ) : (
        <Loader height={"239.641px"} />
      )}

      {dailyOneCall ? <CardDaily dataWeather={dailyOneCall} /> : <Loader />}
      {currentWeather ? (
        <CardWeatherInfo dataWeather={currentWeather} />
      ) : (
        <Loader height={"744px"} />
      )}
    </div>
  );
}

export default App;
