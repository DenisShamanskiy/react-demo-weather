import React, { useEffect, useState } from "react";

import Current from "./components/Current";
import Search from "./components/Search";
import Alerts from "./components/Alerts";
import Hourly from "./components/Hourly";
import Daily from "./components/Daily";
import AirPollution from "./components/AirPollution";
import CurrentDetailed from "./components/CurrentDetailed";
import Footer from "./components/Footer";
// utils
import getCurrentCoordinates from "./utils/getCurrentCoordinates";
import {
  сurrentWeatherAPI,
  oneCallAPI,
  airPollutionAPI,
  geocodingAPI,
} from "./utils/API";
// Styles
import GlobalStyles from "./styles/Global";
import StyledApp from "./styles/StyledApp";
// Loader
import LoaderCurrent from "./styles/Loader/LoaderCurrent";
import LoaderHourly from "./styles/Loader/LoaderHourly";
import LoaderDaily from "./styles/Loader/LoaderDaily";
import LoaderAirPollution from "./styles/Loader/LoaderAirPollution";
import LoaderCurrentDetailed from "./styles/Loader/LoaderCurrentDetailed";

function App() {
  const [currentWeather, setCurrentWeather] = useState();
  const [alertsWeather, setAlertsWeather] = useState();
  const [hourlyWeather, setHourlyWeather] = useState();
  const [dailyWeather, setDailyWeather] = useState();
  const [airPollution, setAirPollution] = useState();
  const [timeZone, setTimeZone] = useState();

  // Основной запрос
  async function getWeatherCurrentCoordinates() {
    const [lat, lon] = await getCurrentCoordinates();
    const dataCurrentWeather = await сurrentWeatherAPI(lat, lon);
    const dataOneCall = await oneCallAPI(lat, lon);
    const dataAirPollution = await airPollutionAPI(lat, lon);
    dataCurrentWeather.uvi = dataOneCall.current.uvi;
    setCurrentWeather(dataCurrentWeather);
    setAlertsWeather(dataOneCall.alerts);
    setHourlyWeather(dataOneCall.hourly.slice(0, 25));
    setDailyWeather(dataOneCall.daily);
    setAirPollution(dataAirPollution);
    setTimeZone(dataOneCall.timezone_offset);
  }

  // Поиск погоды по городу
  async function getCityWeather(city) {
    const coordinates = await geocodingAPI(city);
    const dataCurrentWeather = await сurrentWeatherAPI(...coordinates);
    const dataOneCall = await oneCallAPI(...coordinates);
    const dataAirPollution = await airPollutionAPI(...coordinates);
    dataCurrentWeather.uvi = dataOneCall.current.uvi;
    setCurrentWeather(dataCurrentWeather);
    setAlertsWeather(dataOneCall.alerts);
    setHourlyWeather(dataOneCall.hourly.slice(0, 25));
    setDailyWeather(dataOneCall.daily);
    setAirPollution(dataAirPollution);
    setTimeZone(dataOneCall.timezone_offset);
  }

  useEffect(() => {
    getWeatherCurrentCoordinates();
  }, []);

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        {currentWeather ? (
          <Current currentWeather={currentWeather} />
        ) : (
          <LoaderCurrent />
        )}

        <Search search={getCityWeather} />

        {alertsWeather ? (
          <Alerts dataAlerts={alertsWeather} timeZone={timeZone} />
        ) : (
          ""
        )}

        {hourlyWeather ? (
          <Hourly hourlyWeather={hourlyWeather} timeZone={timeZone} />
        ) : (
          <LoaderHourly />
        )}

        {dailyWeather ? <Daily dataWeather={dailyWeather} /> : <LoaderDaily />}

        {airPollution ? (
          <AirPollution airPollution={airPollution} />
        ) : (
          <LoaderAirPollution />
        )}

        {currentWeather ? (
          <CurrentDetailed dataWeather={currentWeather} />
        ) : (
          <LoaderCurrentDetailed />
        )}

        <Footer />
      </StyledApp>
    </>
  );
}

export default App;
