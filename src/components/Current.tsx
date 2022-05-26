import React from "react";
import {
  StyledCard,
  City,
  Temperature,
  Description,
} from "../styles/StyledCurrent";

interface ICurrentProps {
  currentWeather: {
    name: string,
    main: {
      temp: number,
      temp_max: number,
      temp_min: number,
    },
    weather: [{description: string}]
  },
}

  const Current: React.FC<ICurrentProps> = ({ currentWeather }): React.ReactElement => {
    // console.log(currentWeather);
    
  const {
    name,
    main: { temp, temp_max, temp_min },
    weather: [{description}],
  } = currentWeather;

  return (
    <StyledCard>
      <City>{name}</City>
      <Temperature>{Math.round(temp)}°</Temperature>
      <Description>
        {description.slice(0, 1).toUpperCase()}{description.slice(1)}
      </Description>
      <Description>
        Макс.: {Math.round(temp_max)}° Мин.: {Math.round(temp_min)}°
      </Description>
    </StyledCard>
  );
}

export default Current
