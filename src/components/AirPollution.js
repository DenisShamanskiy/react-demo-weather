import React from "react";
import {
  Container,
  Title,
  Wrapper,
  Description,
  List,
  Item,
  ChemicalFormula,
  Value,
  Designation,
} from "../styles/StyledAirPollution";
import { Input } from "../styles/StyledCurrentDetailed";

export default function AirPollution({ currentWeather }) {
  //   const {
  //     name,
  //     main: { temp, temp_max, temp_min },
  //     weather,
  //   } = currentWeather;
  //   const [data] = weather;
  //   const { description } = data;

  function getDescriptionCAQI(index) {
    switch (index) {
      case "1":
        return "Очень низкое";
      case "2":
        return "Низкое";
      case "3":
        return "Среднее";
      case "4":
        return "Высокое";
      case "5":
        return "Очень высокое";
    }
  }

  return (
    <Container>
      <Title icon="Air">ЗАГРЯЗНЕНИЕ ВОЗДУХА:</Title>
      <Wrapper>
        <Description>{getDescriptionCAQI("3")}</Description>
        <Input
          pollution
          readOnly={true}
          type="range"
          min="1"
          max="5"
          value={5}
        ></Input>
      </Wrapper>
      <List>
        <Item>
          <ChemicalFormula>CO</ChemicalFormula>
          <Designation>Монооксид углерода</Designation>
          <Value>
            223.64 мкг/м<sup>3</sup>
          </Value>
        </Item>
        <Item>
          <ChemicalFormula>
            NH<sub>3</sub>
          </ChemicalFormula>

          <Designation>Аммиак</Designation>
          <Value>
            0.08 мкг/м<sup>3</sup>
          </Value>
        </Item>
        <Item>
          <ChemicalFormula>NO</ChemicalFormula>

          <Designation>Монооксид азота</Designation>
          <Value>
            0.1 мкг/м<sup>3</sup>
          </Value>
        </Item>
        <Item>
          <ChemicalFormula>
            NO<sub>2</sub>
          </ChemicalFormula>

          <Designation>Диоксид азота</Designation>
          <Value>
            0.75 мкг/м<sup>3</sup>
          </Value>
        </Item>
        <Item>
          <ChemicalFormula>
            O<sub>3</sub>
          </ChemicalFormula>

          <Designation>Озон</Designation>
          <Value>
            85.12 мкг/м<sup>3</sup>
          </Value>
        </Item>
        <Item>
          <ChemicalFormula>
            PM<sub>2.5</sub>
          </ChemicalFormula>

          <Designation>Мелкодисперсные частицы</Designation>
          <Value>
            0.5 мкг/м<sup>3</sup>
          </Value>
        </Item>
        <Item>
          <ChemicalFormula>
            M<sub>10</sub>
          </ChemicalFormula>

          <Designation>Грубые твердые частицы</Designation>
          <Value>
            0.64 мкг/м<sup>3</sup>
          </Value>
        </Item>
        <Item>
          <ChemicalFormula>
            SO<sub>2</sub>
          </ChemicalFormula>

          <Designation>Диоксид серы</Designation>
          <Value>
            1.01 мкг/м<sup>3</sup>
          </Value>
        </Item>
      </List>
    </Container>
  );
}
