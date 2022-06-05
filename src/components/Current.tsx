import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { StateCurrentWeather } from "redux/types";
import LoaderCurrent from "styles/Loader/LoaderCurrent";
import {
  StyledCard,
  City,
  Temperature,
  Description,
} from "../styles/StyledCurrent";


  const Current: React.FC = (): React.ReactElement => {

  const { loading } = useAppSelector(state => state.loading)
  const data: StateCurrentWeather = useAppSelector(state => state.currentWeather)

  const {
    name,
    main: { temp, temp_max, temp_min },
    weather: [{description}],
  } = data;


  return (
    loading ? 

    <LoaderCurrent /> :

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
