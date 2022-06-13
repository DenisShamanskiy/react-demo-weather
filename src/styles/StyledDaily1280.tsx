import styled from "styled-components";
// import Calendar from "../images/svg/calendar.svg";
import fff from "../images/svg/No-Cloud-Security.svg";
// import { TitleHourly } from "./StyledHourly";

const Container = styled.article`
  grid-column: 1 / 9;
  grid-row: 3 / 5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
 `;

// const TitleDaily = styled.h2`
// font-size: 1.5rem;
// margin: 0;
// `;

const List = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  /* display: flex;
  justify-content: space-between; */
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: var(--br-20);
  display: flex;
  flex-direction: column;
  background-color: #ecf2f9;
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
  font-size: 1.2rem;
  font-weight: 600;
`;

const Icon = styled.img`
  width: 100%;
  margin-bottom: 20px;
  background-color: #ffd6d6;
  border-radius: var(--br-20);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  grid-column: 2 / 3;
`;

const Description = styled.p`
  //margin: 0;
  margin: auto 0;
  font-size: var(--f-s-n-small);
  text-align: center;
`;

const Precipitation = styled(Description)`
  margin-top: 0.2rem;
  font-size: 8px;
`;

const Temperature = styled.p`
  margin: auto 0;
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  font-weight: 600;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;

`;

export {
  Container,
  // TitleDaily,
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
