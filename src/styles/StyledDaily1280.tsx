import styled from "styled-components";
// import Calendar from "../images/svg/calendar.svg";
import fff from "../images/svg/No-Cloud-Security.svg";
// import { TitleHourly } from "./StyledHourly";

const Container = styled.article`
  grid-column: 1 / 5;
  grid-row: 1 / 13;
  width: 100%;
  display: grid;
  grid-template-rows: 50px repeat(8, 70px);
 `;

const TitleDaily = styled.h2`
font-size: 1.5rem;
margin: 0;
  
`;

const List = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
`;

const Item = styled.li`
  min-height: 70px;
  border: 1px solid red;
  border-radius: 15px;
  margin: 5px;
  display: grid;
  grid-template-columns: 70px 1fr 110px;
  justify-content: center;
  justify-self: stretch;
  align-items: center;

  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  backdrop-filter: var(--backdrop-filter);
  -webkit-backdrop-filter: var(--webkit-bf);
  border: var(--border);
  /* border-bottom: 1px solid var(--border-color); */
`;

const ErrorBlock = styled.div`
  width: 200px;
  min-height: 200px;
  /* border: 1px solid red; */
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${fff});
  background-repeat: no-repeat;
  background-position: center;
`;

const Day = styled.p`
  margin: auto;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  grid-column: 2 / 3;
`;

const Icon = styled.img`
  width: 85%;
  margin: auto;
  background-color: gray;
  border-radius: 15px;
  grid-column: 1 / 2;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  grid-column: 2 / 3;
`;

const Description = styled.p`
  margin: 0;
  font-size: var(--f-s-n-small);
  text-align: center;
`;

const Precipitation = styled(Description)`
  margin-top: 0.2rem;
  font-size: 8px;
`;

const Temperature = styled.p`
  margin: 0;
  width: 100%;
  height: 100%;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 3 / 4;
  background-color: #8dc6ff;
  border-radius: 0 15px 15px 0;

`;

export {
  Container,
  TitleDaily,
  List,
  Item,
  ErrorBlock,
  Day,
  Icon,
  Wrapper,
  Description,
  Precipitation,
  Temperature,
};
