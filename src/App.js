import React, { useEffect, useState } from "react";

import Current from "./components/Current";
import Search from "./components/Search";
import Alerts from "./components/Alerts";
import Hourly from "./components/Hourly";
import Daily from "./components/Daily";
import CurrentDetailed from "./components/CurrentDetailed";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
// utils
import getCoordinates from "./utils/getCoordinates";
import { сurrentWeatherData, OneCallAPI } from "./utils/fetch";
// Styles
import GlobalStyles from "./styles/Global";
import StyledApp from "./styles/StyledApp";
// Loader
import LoaderHourly from "./styles/Loader/LoaderHourly";
import LoaderDaily from "./styles/Loader/LoaderDaily";

function App() {
  // const [latitude, setLatitude] = useState();
  // console.log(`latitude ${latitude}`);
  // const [longitude, setLongitude] = useState();
  // console.log(`longitude ${longitude}`);
  // const [city, setCity] = useState("");
  // console.log(`Город ${city}`);
  const [currentWeather, setCurrentWeather] = useState();
  // console.log(currentWeather);
  const [currentOneCall, setCurrentOneCall] = useState({});
  // console.log(currentOneCall);
  const [dailyOneCall, setDailyOneCall] = useState();
  // console.log(dailyOneCall);
  const [hourlyOneCall, setHourlyOneCall] = useState();
  // console.log(hourlyOneCall);
  const [timeZone, setTimeZone] = useState();
  // console.log(timeZone);
  const [alertsOneCall, setAlertsOneCall] = useState();
  // console.log(alertsOneCall);

  // const [dataWeather, setDataWeather] = useState([]);
  // const [data5DayWeather, set5DayWeather] = useState([]);
  // const [er, setEr] = useState("");

  // Основной запрос
  async function getWeatherByCoordinates() {
    const [lat, lon] = await getCoordinates();
    const responseCurrentWeather = await сurrentWeatherData(lat, lon);
    const {
      current: { uvi },
      daily,
      alerts,
    } = await OneCallAPI(lat, lon);
    responseCurrentWeather.uvi = uvi;
    getWeatherHourly(lat, lon);
    setCurrentWeather(responseCurrentWeather);
    setDailyOneCall(daily);
    setAlertsOneCall(alerts);
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

    const {
      current: { uvi },
      daily,
      alerts,
    } = await OneCallAPI(lat, lon);
    dataCityWeather.uvi = uvi;
    setCurrentWeather(dataCityWeather);
    const hourlyWeather = await fetch(
      `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
    );
    const { hourly, timezone_offset } = await hourlyWeather.json();
    setTimeZone(timezone_offset);
    setHourlyOneCall(hourly.slice(0, 25));
    setDailyOneCall(daily);
    setAlertsOneCall(alerts);
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

  useEffect(() => {
    // getGeolocation();
    // getWeatherGeolocation();
    // getWeatherCityOneCall();
    getWeatherByCoordinates();
  }, []);

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        {currentWeather ? (
          <Current currentWeather={currentWeather} />
        ) : (
          <Loader height={"239.641px"} />
        )}
        <Search search={getCityWeather} />
        {alertsOneCall ? (
          <Alerts dataAlerts={alertsOneCall} timeZone={timeZone} />
        ) : (
          ""
        )}
        {hourlyOneCall ? (
          <Hourly hourlyWeather={hourlyOneCall} timeZone={timeZone} />
        ) : (
          <LoaderHourly />
        )}

        {dailyOneCall ? <Daily dataWeather={dailyOneCall} /> : <LoaderDaily />}

        {currentWeather ? (
          <CurrentDetailed dataWeather={currentWeather} />
        ) : (
          <Loader height={"744px"} />
        )}

        <Footer />
      </StyledApp>
    </>
  );
}

export default App;
