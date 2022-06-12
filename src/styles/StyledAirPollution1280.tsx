import styled from "styled-components";
// import { TitleHourly } from "./StyledHourly";
// import Air from "../images/svg/air-pollution.svg";

const Container = styled.article`
  width: 100%;
  margin: 5px;
  /* margin-top: 20px; */
  /* max-height: 200px; */
  /* height: 398px; */
  /* padding: 0.9rem; */
  /* display: flex;
  flex-direction: column; */
  /* justify-content: space-between; */
  border-radius: var(--radius-main);
  /* background-color: var(--second);
  backdrop-filter: blur(7px); */
  ${"" /* фон */}
  /* background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  backdrop-filter: var(--backdrop-filter);
  -webkit-backdrop-filter: var(--webkit-bf);
  border: var(--border); */
  grid-column: 7 / 13;
  grid-row: 1 / 4;
  display: grid;
  grid-template-rows: 50px 80px 80px;
`;

const TitleAir = styled.h2`

font-size: 1.5rem;
margin: 0;
  
`;

const Wrapper = styled.div`
  display: flex;
  /* margin: auto 0; */
  
`;
const Wrapper2 = styled.div`
border-radius: 15px;
/* min-height: 160px; */
justify-content: space-between;
grid-row: 2 / 4;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  backdrop-filter: var(--backdrop-filter);
  -webkit-backdrop-filter: var(--webkit-bf);
  border: var(--border);
  
`;

const Description = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

const Item = styled.li`
width: 70px;
height: 70px;
  /* height: 2.2rem; */
  /* display: grid;
  grid-template-columns: 60px 1fr 125px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border-bottom: 1px solid var(--border-color); */
  font-size: 0.7rem;
  border: 1px solid red;
  border-radius: 15px;
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
  Wrapper2,
  Description,
  List,
  Item,
  ChemicalFormula,
  Value,
  Designation,
};
