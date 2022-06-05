import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { StateOneCall } from "redux/types";
import LoaderDaily from "styles/Loader/LoaderDaily";
import {
  Container,
  TitleDaily,
  List,
  Item,
  Day,
  Icon,
  Wrapper,
  Description,
  Precipitation,
  Temperature,
} from "../styles/StyledDaily";
import formate from "../utils/formate";

const Daily: React.FC = (): React.ReactElement => {
  
  const { loading } = useAppSelector(state => state.loading)
  const data: StateOneCall = useAppSelector(state => state.oneCall)

  const dataWeather = data.daily
  
  return (
    loading ? 

    <LoaderDaily /> :
    
    <Container>
      <TitleDaily>ПРОГНОЗ НА 7 ДНЕЙ</TitleDaily>

      <List>
        {dataWeather.map(({ temp: { max, min }, weather, dt, pop }, index) => {
          return (
            <Item key={index}>
              <Day>
                {index === 0
                  ? "Сегодня"
                  : index === 1
                  ? "Завтра"
                  : formate.dayWeek(dt)}
              </Day>
              <Icon
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="Иконка погоды"
              />
              <Wrapper>
                <Description>
                  {weather[0].description[0].toUpperCase() +
                    weather[0].description.slice(1)}
                </Description>
                {pop !== 0 ? (
                  <Precipitation>{`Вероятность осадков ${formate.precipitation(
                    pop
                  )}`}</Precipitation>
                ) : (
                  ""
                )}
              </Wrapper>
              <Temperature>{Math.round(min)}°</Temperature>
              <Temperature>{Math.round(max)}°</Temperature>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}

export default (Daily)