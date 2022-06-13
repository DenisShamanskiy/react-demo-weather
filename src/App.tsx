import React, { useEffect, useState } from "react";

import GlobalStyles from "styles/Global";
import StyledApp from "styles/StyledApp";

import Current from "components/Current";
import Search from "components/Search";
import Alerts from "components/Alerts";
import Hourly from "components/Hourly";
import Daily from "components/Daily";
import AirPollution from "components/AirPollution";
import CurrentDetailed from "components/CurrentDetailed";
import Footer from "components/Footer";
import CustomPopup from "components/CustomPopup";

import { useDispatch } from "react-redux";
import { getLocalWeather } from "redux/actions";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import StyledApp1280, { /*Wrapper*/ } from "styles/StyledApp1280";
// import { Title, Text, CardFallout, TextRight, CardFeels, CardHumidity, CardVisibility, CardPressure } from "styles/StyledCurrentDetailed1280";
import Wrapper1 from "components/Wrapper1";
import Wrapper2 from "components/Wrapper2";

const App: React.FC = () => {

  const dispatch = useDispatch()
  
  const show = useAppSelector(state => state.popupAlert)
  
  const alerts = useAppSelector(state => state.oneCall.alerts)

  // const data = useAppSelector(state => state.currentWeather)

  const [size, setSize] = useState(window.innerWidth)

  // console.log(size);

  const handleSubscribe = () => setSize(window.innerWidth)

  const onSubscribe = () =>  window.addEventListener('resize', handleSubscribe)

  const offSubscribe = () => window.removeEventListener('resize', handleSubscribe)

  // const {
  //   visibility,
  //   main: { humidity, pressure, feels_like },
  //   rain,
  //   snow,
  // } = data;

  // const getPrecipitation = () =>
  //   rain ? `${rain["1h"]} мм` : snow ? `${snow["1h"]} мм` : "0 мм";

  useEffect(() => {
    dispatch(getLocalWeather())
    onSubscribe()
   return () => offSubscribe()
  }, []);  
  
  return (
    <>
      <GlobalStyles />

      {show ? <CustomPopup /> : "" }

      {size < 1280 ? <StyledApp size={size}>

      <Current />

      <Search />

      {alerts !== undefined && alerts.length > 0 && <Alerts/>}

      <Hourly />
  
      <Daily />

      <AirPollution />

      <CurrentDetailed />
  
      <Footer />

      </StyledApp> : <StyledApp1280>
        <Wrapper1></Wrapper1>
        <Wrapper2></Wrapper2>
          {/* <Wrapper>
            <CardFallout>
              <Title icon="Fallout">
                {rain ? "ДОЖДЬ" : snow ? "СНЕГ" : "ОСАДКОВ НЕТ"}
              </Title>
              <Text>{getPrecipitation()}</Text>
              <TextRight>за последний час</TextRight>
            </CardFallout>
            <CardFeels>
              <Title icon="Thermometer">ОЩУЩАЕТСЯ КАК</Title>
              <Text>{`${Math.round(feels_like)}°`}</Text>
            </CardFeels>
            <CardHumidity>
              <Title icon="Moisture">ВЛАЖНОСТЬ</Title>
              <Text>{`${humidity} %`}</Text>
            </CardHumidity>
            <CardVisibility>
              <Title icon="Eye">ВИДИМОСТЬ</Title>
              <Text>{`${visibility / 1000} км.`}</Text>
            </CardVisibility>
            <CardPressure>
              <Title icon="Atmosphere">ДАВЛЕНИЕ</Title>
              <Text>{`${Math.round(pressure * 0.75006375541921)} мм рт.ст.`}</Text>
            </CardPressure>
            
          </Wrapper> */}
      </StyledApp1280>
      
      }
    </>
  );
}

export default App;
