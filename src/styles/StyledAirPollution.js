import styled from "styled-components";
import Air from "../images/svg/air-pollution.svg";

const Container = styled.article`
  width: 398px;
  height: 398px;
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--radius-main);
  background-color: var(--second);
  backdrop-filter: blur(7px);
  ${"" /* фон */}
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  backdrop-filter: var(--backdrop-filter);
  -webkit-backdrop-filter: var(--webkit-bf);
  border: var(--border);
  grid-column: 1 / 3;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;

  &::before {
    content: url(${Air});
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 0.3rem;
    align-items: center;
    justify-content: center;
    background-size: contain;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
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
  flex-direction: column;
  justify-content: center;
  &:last-child {
    border: none;
  }
`;

const Item = styled.li`
  height: 2.2rem;
  display: grid;
  grid-template-columns: 60px 1fr 115px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  font-size: 0.7rem;

  &:first-child {
    border-top: 1px solid var(--border-color);
  }
`;

const ChemicalFormula = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const Value = styled(ChemicalFormula)`
  margin: 0 0 0 auto;
`;

const Designation = styled(ChemicalFormula)`
  margin: 0 auto;
  font-size: var(--f-s-n-small);
`;

export {
  Container,
  Title,
  Wrapper,
  Description,
  List,
  Item,
  ChemicalFormula,
  Value,
  Designation,
};
