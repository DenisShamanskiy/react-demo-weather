import React from "react";
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

type AirPollutionProps = {
  airPollution: {components: any[], main: any},
}

export const AirPollution: React.FC<AirPollutionProps> = ({ airPollution }) => {

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
  } = airPollution;

  const unit = (
    <span>
      мкг/м<sup>3</sup>
    </span>
  );

  const arrayChemicalFormula = [
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

  const arrayDesignation = [
    "Монооксид углерода",
    "Аммиак",
    "Монооксид азота",
    "Диоксид азота",
    "Озон",
    "Мелкодисперсные частицы",
    "Грубые твердые частицы",
    "Диоксид серы",
  ];

  function getDescriptionCAQI(index: number) {
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
    return "Нет информации"
  }

  return (
    <Container>
      <TitleAirPollution>ЗАГРЯЗНЕНИЕ ВОЗДУХА</TitleAirPollution>
      <Wrapper>
        <Description>{getDescriptionCAQI(aqi)}</Description>
        <Input
          pollution
          readOnly={true}
          type="range"
          min="1"
          max="5"
          value={aqi}
        ></Input>
      </Wrapper>
      <List>
        {Object.values(components).map((value, index) => {
          return (
            <Item key={index}>
              {arrayChemicalFormula[index]}
              <Designation>{arrayDesignation[index]}</Designation>
              <Value>
                {value} {unit}
              </Value>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}

export default AirPollution
