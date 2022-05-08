import React from "react";
import {
  Card,
  Title,
  Text,
  TextRight,
  Description,
  Input,
  Compass,
  North,
  East,
  West,
  South,
  CompassArrow,
} from "../styles/StyledCurrentDetailed";
import formate from "../utils/formate";

export default function CardWeatherInfo({ dataWeather }) {
  const {
    uvi,
    visibility,
    timezone,
    wind: { speed, deg },
    main: { humidity, pressure, feels_like },
    sys: { sunrise, sunset },
    rain,
    snow,
  } = dataWeather;

  const getPrecipitation = () =>
    rain ? `${rain["1h"]} мм` : snow ? `${snow["1h"]} мм` : "0 мм";

  function getUviDescription(u) {
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

  return (
    <>
      <Card>
        <Title icon="Uv">УФ-ИНДЕКС</Title>
        <Text>{uvi}</Text>
        <Description>{getUviDescription(uvi)}</Description>
        <Input
          readOnly={true}
          type="range"
          min="0"
          max="13"
          value={uvi}
        ></Input>
      </Card>

      <Card>
        <Title icon="Sun">ВОСХОД СОЛНЦА</Title>
        <Text>{formate.time(sunrise, timezone)}</Text>
        <Description>{`Заход ${formate.time(sunset, timezone)}`}</Description>
      </Card>

      <Card>
        <Title icon="Wind">ВЕТЕР</Title>
        <Text>{`${Math.round(speed)} м/с`}</Text>
        <Compass>
          <North>N</North>
          <East>E</East>
          <West>W</West>
          <South>S</South>
          <CompassArrow deg={deg}></CompassArrow>
        </Compass>
      </Card>

      <Card>
        <Title icon="Fallout">
          {rain ? "ДОЖДЬ" : snow ? "СНЕГ" : "ОСАДКОВ НЕТ"}
        </Title>
        <Text>{getPrecipitation()}</Text>
        <TextRight>за последний час</TextRight>
      </Card>

      <Card>
        <Title icon="Thermometer">ОЩУЩАЕТСЯ КАК</Title>
        <Text>{`${Math.round(feels_like)}°`}</Text>
      </Card>

      <Card>
        <Title icon="Moisture">ВЛАЖНОСТЬ</Title>
        <Text>{`${humidity} %`}</Text>
      </Card>

      <Card>
        <Title icon="Eye">ВИДИМОСТЬ</Title>
        <Text>{`${visibility / 1000} км.`}</Text>
      </Card>

      <Card>
        <Title icon="Atmosphere">ДАВЛЕНИЕ</Title>
        <Text>{`${Math.round(pressure * 0.75006375541921)} мм рт.ст.`}</Text>
      </Card>
    </>
  );
}
