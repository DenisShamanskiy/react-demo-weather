import React from "react";
// import { useAppSelector } from "redux/hooks/useTypedSelector";
// import { CardSunrise, Title, Text, Description } from "styles/StyledCurrentDetailed1280";
import { StyledWrapper2 } from "styles/StyledWrapper2";
// import formate from "utils/formate";
// import Alerts1280 from "./Alerts1280";
import Current1280_2 from "./Current1280_2";
import Hourly1280 from "./Hourly1280";
import Search1280 from "./Search1280";

const Wrapper2: React.FC = () => {

  // const data = useAppSelector(state => state.currentWeather)
  // const alerts = useAppSelector(state => state.oneCall.alerts)

  // const {
  //   timezone,
  //   sys: { sunrise, sunset },
  // } = data;
  
  return (
    <StyledWrapper2>
      <Search1280></Search1280>
      {/* {alerts !== undefined && alerts.length > 0 && <Alerts1280/>} */}
      <Current1280_2></Current1280_2>
      <Hourly1280/>
      {/* <CardSunrise>
              <Title icon="Sun">ВОСХОД СОЛНЦА</Title>
              <Text>{formate.time(sunrise, timezone)}</Text>
              <Description>{`Заход ${formate.time(sunset, timezone)}`}</Description>  
            </CardSunrise> */}
    </StyledWrapper2>
  );
}

export default Wrapper2;