// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
//import WeatherAlert from "./components/AlertWeather/AlertWeather";
import CardWeather from "./components/CardWeather/CardWeather";
import CardWeatherList from "./components/CardWeatherList/CardWeatherList";
import Loader from "./components/Loader";
import Search from "./components/Search/Search";
import CardWeatherInfoContainer from "./components/CardWeatherInfoContainer/CardWeatherInfoContainer";
import { waitForElementToBeRemoved } from "@testing-library/react";
import CardWeatherHourly from "./components/CardWeatherHourly/CardWeatherHourly";

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
  const [dailyOneCall, setDailyOneCall] = useState({});
  // console.log(dailyOneCall);
  const [hourlyOneCall, setHourlyOneCall] = useState();
  // console.log(hourlyOneCall);

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
      `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    );
    const {
      current: { uvi },
    } = await currentOneCall.json();
    const dataCurrentWeather = await response.json();
    dataCurrentWeather.uvi = uvi;
    setCurrentWeather(dataCurrentWeather);
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
  }

  // 1 час
  async function getWeatherHourly(lat, lon) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    );
    const { hourly } = await response.json();
    // console.log(data);
    setHourlyOneCall(hourly.slice(0, 25));
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

  // API одного вызова
  // async function getWeatherCityOneCall() {
  //   const position = await new Promise((res, rej) => {
  //     navigator.geolocation.getCurrentPosition(res, rej);
  //   });
  //   // console.log(position.coords.latitude);
  //   // console.log(position.coords.longitude);
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  //   );
  //   const cityName = await fetch(
  //     `${process.env.REACT_APP_API_URL}/weather/?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${process.env.REACT_APP_API_KEY}&lang=ru`
  //   );
  //   const { name } = await cityName.json();
  //   const { alerts, current, daily, hourly } = await response.json();

  //   setCurrentOneCall(current);
  //   setDailyOneCall(daily);
  //   setHourlyOneCall(hourly);
  //   setAlertsOneCall(alerts);
  //   setCity(name);
  // }

  // const [currentWeather, setCurrentWeather] = useState({});
  // console.log(currentWeather);

  // console.log(dataWeather);
  // console.log(data5DayWeather);

  // async function getWeatherCity(city) {
  //   const response = await fetch(
  //     `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  //   );
  //   const result = await response.json();
  //   getCoordinatesCity(city);
  //   setDataWeather(result);
  //   getWeatherCity5day(city);
  // }

  // async function getWeatherCity5day(city) {
  //   const response = await fetch(
  //     `${process.env.REACT_APP_API_URL}/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  //   );
  //   const result = await response.json();
  //   set5DayWeather(result);
  // }

  // async function getWeatherCityOneCall() {
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  //   );
  //   const result = await response.json();
  //   console.log(result);
  // }

  // async function getWeatherCity(city) {
  //   try {
  //     const [qwer, asdf] = await Promise.all([
  //       fetch(
  //         `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  //       ),
  //       fetch(
  //         `${process.env.REACT_APP_API_URL}/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  //       ),
  //     ]);

  //     console.log(qwer, asdf);
  //     if (!qwer.ok || !asdf.ok) {
  //       console.log(qwer.status, asdf.status);
  //       const message = `Возникла ошибка`;
  //       throw new Error(message);
  //     }
  //     const dataW1 = await qwer.json();
  //     const data5DayWe1 = await asdf.json();

  //     setDataWeather(dataW1);
  //     set5DayWeather(data5DayWe1);
  //     // console.log(dataW1, data5DayWe1);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // function getWeatherCity(city) {
  //   fetch(
  //     `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setDataWeather(result);
  //       // console.log(result);
  //     });
  //   get5DayWeather(city);
  // }

  // function get5DayWeather(city) {
  //   fetch(
  //     `${process.env.REACT_APP_API_URL}/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       set5DayWeather(result);
  //       // console.log(result);
  //     });
  // }

  // console.log(`Широта: ${latitude}`);
  // console.log(`Долгота: ${longitude}`);

  // function getGeolocation() {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLatitude(position.coords.latitude);
  //     setLongitude(position.coords.longitude);
  //   });
  // }

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
        <CardWeatherHourly hourlyWeather={hourlyOneCall} />
      ) : (
        <Loader height={"239.641px"} />
      )}

      {/* {typeof data5DayWeather.list != "undefined" ? (
        <CardWeatherList dataWeather={data5DayWeather} />
      ) : (
        <Loader />
      )} */}
      {currentWeather ? (
        <CardWeatherInfoContainer dataWeather={currentWeather} />
      ) : (
        <Loader height={"744px"} />
      )}
    </div>
  );
}

export default App;
