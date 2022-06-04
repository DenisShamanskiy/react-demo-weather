import React, { useEffect, /*useState*/ } from "react";

import GlobalStyles from "styles/Global";
import StyledApp from "styles/StyledApp";

// import { getCurrentCoordinates } from "utils/getCurrentCoordinates";
// import {
//   сurrentWeatherAPI,
//   oneCallAPI,
//   // airPollutionAPI,
//   // geocodingAPI,
// } from "utils/API";
import Current from "components/Current";
import Search from "components/Search";
// import Alerts from "components/Alerts";
import Hourly from "components/Hourly";
import Daily from "components/Daily";
import AirPollution from "components/AirPollution";
import CurrentDetailed from "components/CurrentDetailed";
import Footer from "components/Footer";
import CustomPopup from "components/CustomPopup";

import { useDispatch } from "react-redux";
import { /*useAppSelector*/ usePopupSelector } from "redux/hooks/useTypedSelector";
import { getLocalWeather } from "redux/actions";

const App: React.FC = () => {

const dispatch = useDispatch()
const popup = usePopupSelector(state => state.popupReducer)
// const { loading } = useAppSelector(state => state.appReducer)

// const [currentWeather, setCurrentWeather] = useState();
// const [alertsWeather, setAlertsWeather] = useState();
// const [hourlyWeather, setHourlyWeather] = useState();
// const [dailyWeather, setDailyWeather] = useState();
// // const [airPollution, setAirPollution] = useState();
// const [timeZone, setTimeZone] = useState();

// async function getData (coordinates: Coordinates): Promise<void> {
//   console.log(coordinates);
//   // try {
//     Promise.all([
//         await сurrentWeatherAPI(coordinates),
//         await oneCallAPI(coordinates)])
//         // await airPollutionAPI(coordinates.latitude, lon)])
//       .then(([dataCurrentWeather, dataOneCall, /*dataAirPollution*/]) => {
//         dataCurrentWeather.uvi = dataOneCall.current.uvi;
//         setCurrentWeather(dataCurrentWeather);
//         setAlertsWeather(dataOneCall.alerts);
//         setHourlyWeather(dataOneCall.hourly.slice(0, 25));
//         setDailyWeather(dataOneCall.daily);
//         console.log(coordinates);
        
//          dispatch(axiosAirPollution(coordinates))// setAirPollution(dataAirPollution);
//         // dispatch(getAirPollution(dataAirPollution))
//         setTimeZone(dataOneCall.timezone_offset) } ) 
//     // } catch (err) {
//     //     dispatch({type: PopupActionTypes.VISIBILITY})
//     // }
//   };
  
  // Основной запрос
  // async function getWeatherCurrentCoordinates(): Promise<void> {
  //   // dispatch(asyncGetCoordinates())
    
  //   // const coordinates: Coordinates = await getCurrentCoordinates();
  //   // console.log(coordinates);
    
  //   getData(cco)
  // }

  // Поиск погоды по городу
  // async function getCityWeather(city: string): Promise<void> {
  //   try {
  //     const coordinates = await geocodingAPI(city);
  //     getData({coordinates[0], coordinates[1]})
  //   } catch (err) {
  //     dispatch({type: PopupActionTypes.VISIBILITY})}
    
  // }

  useEffect(() => {
    dispatch(getLocalWeather())
  }, []);  

  console.log("APP");
  

  return (
    <>
      <GlobalStyles />

      {popup ? <CustomPopup /> : "" }
      
      <StyledApp>

      <Current />

        <Search />

        {/* {loading ? "" : <Alerts/> } */}

        <Hourly />
        
        <Daily />

        <AirPollution />

        <CurrentDetailed />
        
        <Footer />
      </StyledApp>
    </>
  );
}

export default App;
