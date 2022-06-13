import styled from "styled-components";
// import { TitleHourly } from "./StyledHourly";
// import Air from "../images/svg/air-pollution.svg";

const Container = styled.article`
  width: 100%;
  height: 200px;
  padding: 15px;
  border-radius: var(--br-20);
  background-color: #ecf2f9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* grid-template-rows: 50px 1fr 80px; */
  grid-column: 1 / 7;
  grid-row: 5 / 7;
`;

const TitleAir = styled.h2`
font-size: 1.5rem;
margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  /* margin: auto 0; */
  
`;
// const Wrapper2 = styled.div`
// border-radius: 15px;
// /* min-height: 160px; */
// justify-content: space-between;
// /* grid-row: 2 / 4; */
//   display: flex;
//   flex-direction: column;
//   background-color: var(--background-color);
//   box-shadow: var(--box-shadow);
//   backdrop-filter: var(--backdrop-filter);
//   -webkit-backdrop-filter: var(--webkit-bf);
//   border: var(--border);
  
// `;

const Description = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Item = styled.li`
  width: 60px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  /* border: 1px solid red; */
  border-radius: 15px;
  background-color: #a1f480;
`;

const ChemicalFormula = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const Value = styled(ChemicalFormula)`
  /* margin: 0 0 0 auto; */
`;

const Designation = styled(ChemicalFormula)`
  margin: 0 auto;
  font-size: var(--f-s-n-small);
`;

export {
  Container,
  TitleAir,
  Wrapper,
  // Wrapper2,
  Description,
  List,
  Item,
  ChemicalFormula,
  Value,
  Designation,
};
