import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { StateCurrentWeather } from "redux/types";
// import LoaderCurrent from "components/Loader/LoaderCurrent";
import {
  StyledCard1280,
  City,
  Temperature,
  Description,
  DescriptionTemp,
} from "../styles/StyledCurrent1280";
import Alerts1280 from "./Alerts1280";
import Hourly1280 from "./Hourly1280";
import Search1280 from "./Search1280";


  const Current1280: React.FC = (): React.ReactElement => {

  // const { loading } = useAppSelector(state => state.loading)
  const data: StateCurrentWeather = useAppSelector(state => state.currentWeather)
  const alerts = useAppSelector(state => state.oneCall.alerts)

  const {
    name,
    main: { temp, temp_max, temp_min },
    weather: [{description}],
  } = data;


  return (
    <StyledCard1280>
      <City>{name}</City>
      <Temperature>{Math.round(temp)}°</Temperature>
      <Description>
        {description.slice(0, 1).toUpperCase()}{description.slice(1)}
      </Description>
      <DescriptionTemp>
        Макс. темп. {Math.round(temp_max)}°
      </DescriptionTemp>
      <DescriptionTemp>
        Мин. темп. {Math.round(temp_min)}°
      </DescriptionTemp>
      {alerts !== undefined && alerts.length > 0 && <Alerts1280/>}
      <Search1280/>
      <Hourly1280/>
    </StyledCard1280>
  );
}

export default Current1280
