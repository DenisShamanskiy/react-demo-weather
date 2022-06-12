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
import Current1280 from "components/Current1280";
import StyledApp1280, { Wrapper } from "styles/StyledApp1280";
import Daily1280 from "components/Daily1280";
import AirPollution1280 from "components/AirPollution1280";
import { CardUi, Description, Input, Title, Text, CardFallout, TextRight, CardFeels, CardHumidity, CardVisibility, CardPressure, CardSunrise, CardWind, Compass, North, East, West, South, CompassArrow } from "styles/StyledCurrentDetailed1280";
import formate from "utils/formate";

const App: React.FC = () => {

  const dispatch = useDispatch()
  
  const show = useAppSelector(state => state.popupAlert)
  
  const alerts = useAppSelector(state => state.oneCall.alerts)

  const data = useAppSelector(state => state.currentWeather)

  const { current: { uvi } } = useAppSelector(state => state.oneCall)

  const [size, setSize] = useState(window.innerWidth)

  // console.log(size);

  const handleSubscribe = () => setSize(window.innerWidth)

  const onSubscribe = () =>  window.addEventListener('resize', handleSubscribe)

  const offSubscribe = () => window.removeEventListener('resize', handleSubscribe)

  const {
    visibility,
    timezone,
    wind: { speed, deg },
    main: { humidity, pressure, feels_like },
    sys: { sunrise, sunset },
    rain,
    snow,
  } = data;
  
  function getUviDescription(u: number) {
    if (u < 3) {
      return "Низкий";
    } else if (u >= 3 && u < 6) {
      return "Умеренный";
    } else if (u >= 6 && u <= 8) {
      return "Высокий";
    } else if (u >= 8 && u <= 11) {
      return "Очень высокий";
    }
    return "Чрезмерный";
  }

  const getPrecipitation = () =>
    rain ? `${rain["1h"]} мм` : snow ? `${snow["1h"]} мм` : "0 мм";

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
        <Current1280/>
          <Wrapper>
            <Daily1280/>
            <AirPollution1280/>
            <CardUi>
            <Title icon="Uv">УФ-ИНДЕКС</Title>
              <Text>{uvi}</Text>
              <Description>{getUviDescription(uvi)}</Description>
              <Input
                pollution
                readOnly={true}
                type="range"
                min="0"
                max="13"
                value={uvi}
              ></Input>
            </CardUi>
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
            <CardSunrise>
              <Title icon="Sun">ВОСХОД СОЛНЦА</Title>
              <Text>{formate.time(sunrise, timezone)}</Text>
              <Description>{`Заход ${formate.time(sunset, timezone)}`}</Description>  
            </CardSunrise>
            <CardWind>
              <Title icon="Wind">ВЕТЕР</Title>
              <Text>{`${Math.round(speed)} м/с`}</Text>
              <Compass>
                <North>N</North>
                <East>E</East>
                <West>W</West>
                <South>S</South>
                <CompassArrow deg={deg}></CompassArrow>
              </Compass>
            </CardWind>
          </Wrapper>
      </StyledApp1280>
      
      }
    </>
  );
}

export default App;
