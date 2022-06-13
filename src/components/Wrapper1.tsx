import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { CardWind, Title, Text, Compass, North, East, West, South, CompassArrow, CardUi, Description, Input, CardSunrise, CardFallout, TextRight } from "styles/StyledCurrentDetailed1280";
import { StyledWrapper1 } from "styles/StyledWrapper1";
import formate from "utils/formate";
import AirPollution1280 from "./AirPollution1280";
import Alerts1280 from "./Alerts1280";
import Daily1280 from "./Daily1280";

const Wrapper1: React.FC = () => {

    const data = useAppSelector(state => state.currentWeather)
    const alerts = useAppSelector(state => state.oneCall.alerts)
    const { current: { uvi } } = useAppSelector(state => state.oneCall)

    const {
        // visibility,
        timezone,
        wind: { speed, deg },
        // main: { humidity, pressure, feels_like },
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

const getPrecipitation = () => rain ? `${rain["1h"]} мм` : snow ? `${snow["1h"]} мм` : "0 мм";
      
  
  return (
    <StyledWrapper1>
      <p>12:30</p>
      {alerts !== undefined && alerts.length > 0 && <Alerts1280/>}
        <Daily1280/>
        <AirPollution1280/>
        <CardFallout>
          <Title icon="Fallout">
            {rain ? "ДОЖДЬ" : snow ? "СНЕГ" : "ОСАДКОВ НЕТ"}
          </Title>
          <Text>{getPrecipitation()}</Text>
          <TextRight>за последний час</TextRight>
        </CardFallout>
        <CardSunrise>
          <Title icon="Sun">ВОСХОД СОЛНЦА</Title>
          <Text>{formate.time(sunrise, timezone)}</Text>
          <Description>{`Заход ${formate.time(sunset, timezone)}`}</Description>  
        </CardSunrise>
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
    </StyledWrapper1>
  );
}

export default Wrapper1;