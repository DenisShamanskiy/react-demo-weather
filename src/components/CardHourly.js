import React from "react";
import {
  Container,
  Title,
  List,
  Item,
  Time,
  Icon,
  Temperature,
} from "../styles/StyledHourly";
import ScrollHorizontal from "./ScrollHorizontal";
import formate from "../utils/formate";

export default function CardHourly({ hourlyWeather, timeZone }) {
  // console.log(hourlyWeather);

  return (
    <Container>
      <Title>ПОЧАСОВОЙ ПРОГНОЗ</Title>
      <ScrollHorizontal List={List}>
        {hourlyWeather.map(({ temp, weather, dt }, index) => {
          return (
            <Item key={index}>
              <Time>{index === 0 ? "Сейчас" : formate.time(dt, timeZone)}</Time>
              <Icon
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="Иконка погоды"
              />
              <Temperature>{`${Math.round(temp)}°`}</Temperature>
            </Item>
          );
        })}
      </ScrollHorizontal>
    </Container>
  );
}
