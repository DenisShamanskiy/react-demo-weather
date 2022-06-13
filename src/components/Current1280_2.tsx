import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { StateCurrentWeather } from "redux/types";
// import LoaderCurrent from "components/Loader/LoaderCurrent";
import {
  StyledCard1280,
  City,
  Temperature,
  Description,
  // DescriptionTemp,
  Humidity,
  HumidityValue,
  HumidityTitle
} from "../styles/StyledCurrent1280_2";


  const Current1280_2: React.FC = (): React.ReactElement => {

  // const { loading } = useAppSelector(state => state.loading)
  const data: StateCurrentWeather = useAppSelector(state => state.currentWeather)
  

  const {
    name,
    main: { temp, humidity /*temp_max, temp_min*/ },
    weather: [{description}],
  } = data;


  return (
    <StyledCard1280>
      <City>{name}</City>
      <Temperature>{Math.round(temp)}°</Temperature>
      <Description>
        {description.slice(0, 1).toUpperCase()}{description.slice(1)}
      </Description>
      <Humidity>
        <HumidityTitle>Влажность</HumidityTitle>
        <HumidityValue>{humidity}%</HumidityValue>
      </Humidity>
      <Humidity>
        <HumidityTitle>Давление</HumidityTitle>
        <HumidityValue>755 мм рт.ст.</HumidityValue>
      </Humidity>
      <Humidity>
        <HumidityTitle>Видимость</HumidityTitle>
        <HumidityValue>10 км.</HumidityValue>
      </Humidity>
      {/* <DescriptionTemp>
        Макс. темп. {Math.round(temp_max)}°
      </DescriptionTemp>
      <DescriptionTemp>
        Мин. темп. {Math.round(temp_min)}°
      </DescriptionTemp> */}
    </StyledCard1280>
  );
}

export default Current1280_2
