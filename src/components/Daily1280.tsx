import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { StateOneCall } from "redux/types";
import LoaderDaily from "components/Loader/LoaderDaily";
import {
  Container,
  // TitleDaily,
  List,
  Item,
  Day,
  Icon,
  // Wrapper,
  // Description,
  // Precipitation,
  Temperature,
  ErrorBlock,
} from "../styles/StyledDaily1280";
import formate from "../utils/formate";

const Daily1280: React.FC = (): React.ReactElement => {
  
  const { loading } = useAppSelector(state => state.loading)
  const data: StateOneCall = useAppSelector(state => state.oneCall)
  const error = useAppSelector(state => state.errors.errorOneCall)

  const dataWeather = data.daily
 
  return (
    loading ? 

    <LoaderDaily /> :
    
    <Container>
      <>
      {/* <TitleDaily>ПРОГНОЗ НА 7 ДНЕЙ</TitleDaily> */}

      {error ? <ErrorBlock/> : 

      <List>
        {dataWeather/*.slice(1, dataWeather.length)*/.map(({ temp: { max, min }, weather, dt, /*pop*/ }, index) => { 
          return (
            <Item key={index}>
              <Icon
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="Иконка погоды"
              />
              <Day>
                {index === 0
                  ? "Сегодня" :
                  index === 1
                  ? "Завтра"
                  : formate.dayWeek(dt + 1)}
              </Day>
              <>
              {/* <Wrapper> */}
              
                {/* <Description>
                  {weather[0].description[0].toUpperCase() +
                    weather[0].description.slice(1)}
                </Description>
                {pop !== 0 ? (
                  <Precipitation>{`Вероятность осадков ${formate.precipitation(
                    pop
                  )}`}</Precipitation>
                ) : (
                  ""
                )} */}
              {/* </Wrapper> */}
              </>
              <Temperature>{Math.round(min)} - {Math.round(max)}°</Temperature>
              {/* <Temperature>{Math.round(max)}°</Temperature> */}
            </Item>
          );
        })}
      </List>}
    </>
    </Container>
  );
}

export default Daily1280