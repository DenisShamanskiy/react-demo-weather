// import { useAppSelector } from "redux/hooks/useTypedSelector";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import LoaderAirPollution from "components/Loader/LoaderAirPollution";
import { ErrorBlock } from "styles/StyledDaily";
import {
  Container,
  TitleAirPollution,
  Wrapper,
  Description,
  List,
  Item,
  ChemicalFormula,
  Value,
  Designation,
} from "../styles/StyledAirPollution";
import { Input } from "../styles/StyledCurrentDetailed";

const AirPollution: React.FC = (): React.ReactElement => {

const { loading } = useAppSelector(state => state.loading)

const data = useAppSelector(state => state.airPollution)

const error = useAppSelector(state => state.errors.errorAirPollution)

enum ListIndex {
  VeryLow = "Очень низкое",
  Low = "Низкое",
  Medium = "Среднее",
  High = "Высокое",
  VeryHigh = "Очень высокое"
}

const {
  components,
  main: { aqi },
} = data;

  const arrayChemicalFormula: JSX.Element[] = [
    <ChemicalFormula>CO</ChemicalFormula>,
    <ChemicalFormula>
      NH<sub>3</sub>
    </ChemicalFormula>,
    <ChemicalFormula>NO</ChemicalFormula>,
    <ChemicalFormula>
      NO<sub>2</sub>
    </ChemicalFormula>,
    <ChemicalFormula>
      O<sub>3</sub>
    </ChemicalFormula>,
    <ChemicalFormula>
      PM<sub>2.5</sub>
    </ChemicalFormula>,
    <ChemicalFormula>
      M<sub>10</sub>
    </ChemicalFormula>,
    <ChemicalFormula>
      SO<sub>2</sub>
    </ChemicalFormula>,
  ];

  const arrayDesignation: string[] = [
    "Монооксид углерода",
    "Аммиак",
    "Монооксид азота",
    "Диоксид азота",
    "Озон",
    "Мелкодисперсные частицы",
    "Грубые твердые частицы",
    "Диоксид серы",
  ];

  const setValue = (num: number) => error ? "Нет данных" : <span>{num} мкг/м<sup>3</sup></span>

  function getDescriptionCAQI(index: number): ListIndex | "Нет данных" {
    switch (index) {
      case 1:
        return ListIndex.VeryLow;
      case 2:
        return ListIndex.Low;
      case 3:
        return ListIndex.Medium;
      case 4:
        return ListIndex.High;
      case 5:
        return ListIndex.VeryHigh;
    } 
    return "Нет данных"
  }

  return (
    loading ? 

    <LoaderAirPollution/> :
    
    <Container>
      <TitleAirPollution>ЗАГРЯЗНЕНИЕ ВОЗДУХА</TitleAirPollution>
      {error ? "" :
      <Wrapper>
        <Description>{getDescriptionCAQI(aqi)}</Description>
        <Input
          pollution
          readOnly={true}
          type="range"
          min="1"
          max="5"
          value={aqi}>
        </Input>
      </Wrapper>}
      {error ? <ErrorBlock/> :
      <List>
        {Object.values(components).map((value, index) => {
          return (
            <Item key={index}>
              {arrayChemicalFormula[index]}
              <Designation>{arrayDesignation[index]}</Designation>
              <Value>
                {setValue(value)}
              </Value>
            </Item>
          );
        })}
      </List>}
    </Container>
  );
}

export default AirPollution