import React from "react";
import {
  StyledCard,
  City,
  Temperature,
  Description,
} from "../styles/StyledCurrent";

export default function CardWeather({ currentWeather }) {
  const {
    name,
    main: { temp, temp_max, temp_min },
    weather,
  } = currentWeather;
  const [data] = weather;
  const { description } = data;

  return (
    <StyledCard>
      <City>{name}</City>
      <Temperature>{Math.round(temp)}°</Temperature>
      <Description>
        {description[0].toUpperCase() + description.slice(1)}
      </Description>
      <Description>
        Макс.: {Math.round(temp_max)}° Мин.: {Math.round(temp_min)}°
      </Description>
    </StyledCard>
  );
}
