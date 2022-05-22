import React, { useEffect, useState } from "react";

import GlobalStyles from "styles/Global";
import StyledApp from "styles/StyledApp";

import getCurrentCoordinates from "utils/getCurrentCoordinates";
import {
  сurrentWeatherAPI,
  oneCallAPI,
  airPollutionAPI,
  geocodingAPI,
} from "utils/API";
import { CardWeather as Current} from "components/Current";
import Search from "components/Search";
import Alerts from "components/Alerts";
import { CardHourly as Hourly} from "components/Hourly";
import { CardDaily as  Daily} from "components/Daily";
import AirPollution from "components/AirPollution";
import { CardWeatherInfo as CurrentDetailed } from "components/CurrentDetailed";
import Footer from "components/Footer";
import CustomPopup from "components/CustomPopup";

import LoaderCurrent from "styles/Loader/LoaderCurrent";
import LoaderHourly from "styles/Loader/LoaderHourly";
import LoaderDaily from "styles/Loader/LoaderDaily";
import LoaderAirPollution from "styles/Loader/LoaderAirPollution";
import LoaderCurrentDetailed from "styles/Loader/LoaderCurrentDetailed";

const App: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState();
  const [alertsWeather, setAlertsWeather] = useState();
  const [hourlyWeather, setHourlyWeather] = useState();
  const [dailyWeather, setDailyWeather] = useState();
  const [airPollution, setAirPollution] = useState();
  const [timeZone, setTimeZone] = useState();
  
  // Popup
  const [visibility, setVisibility] = useState<boolean>(false);

  const popupCloseHandler = () => {
    setVisibility(false);
  };

  async function getData (lat: number, lon: number) {
    try {
      Promise.all([
        await сurrentWeatherAPI(lat, lon),
        await oneCallAPI(lat, lon),
        await airPollutionAPI(lat, lon)])
      .then(([dataCurrentWeather, dataOneCall, dataAirPollution]) => {
        dataCurrentWeather.uvi = dataOneCall.current.uvi;
        setCurrentWeather(dataCurrentWeather);
        setAlertsWeather(dataOneCall.alerts);
        setHourlyWeather(dataOneCall.hourly.slice(0, 25));
        setDailyWeather(dataOneCall.daily);
        setAirPollution(dataAirPollution);
        setTimeZone(dataOneCall.timezone_offset) } ) 
    } catch (err) {
        setVisibility(true)
    }
  };
  
  // Основной запрос
  async function getWeatherCurrentCoordinates() {
    const coordinates = await getCurrentCoordinates();
    getData(...coordinates as [number, number])
  }

  // Поиск погоды по городу
  async function getCityWeather(city: string) {
    const coordinates = await geocodingAPI(city);
    getData(...coordinates as [number, number])
  }

  useEffect(() => {
    getWeatherCurrentCoordinates();
  }, []);

  return (
    <>
      <GlobalStyles />
      {visibility ? (
          <CustomPopup
          onClose={popupCloseHandler}
          visibility={visibility}>
        </CustomPopup>
        ) : (
          ""
        )}
      
      <StyledApp>
        {currentWeather ? (
          <Current currentWeather={currentWeather} />
        ) : (
          <LoaderCurrent />
        )}

        <Search getCityWeather={getCityWeather} />

        {alertsWeather ? (
          <Alerts dataAlerts={alertsWeather} /*timeZone={timeZone}*/ />
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
