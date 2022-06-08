import React, { useEffect } from "react";

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
// import LoaderCurrent from "components/Loader/LoaderCurrent";

const App: React.FC = () => {

  const dispatch = useDispatch()
  
  const show = useAppSelector(state => state.popupAlert)
  
  const sw = useAppSelector(state => state.errors)
  console.log(sw);
  
  const alerts = useAppSelector(state => state.oneCall.alerts)
  
  useEffect(() => {
    dispatch(getLocalWeather())
    // dispatch(showPopupAlert())
  }, []);  
  
  return (
    <>
      <GlobalStyles />

      {show ? <CustomPopup /> : "" }
      
      <StyledApp>

      {/* <LoaderCurrent /> */}
      
      <Current />

      <Search />

      {alerts !== undefined && alerts.length > 0 && <Alerts/>}

      <Hourly />
        
      <Daily />

      <AirPollution />

      <CurrentDetailed />
        
      <Footer />

      </StyledApp>
    </>
  );
}

export default App;
