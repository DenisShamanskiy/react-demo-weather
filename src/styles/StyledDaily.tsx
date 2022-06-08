import styled from "styled-components";
import Calendar from "../images/svg/calendar.svg";
import fff from "../images/svg/No-Cloud-Security.svg";
import { TitleHourly } from "./StyledHourly";

const Container = styled.article`
  grid-column: 1 / 3;
  width: 398px;
  height: 398px;
  padding: 0.9rem;
  display: flex;
  flex-direction: column;

  border-radius: var(--radius-main);
  background-color: var(--second);

  background: rgba(255, 255, 255, 0.5);
  ${"" /* фон */}
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  backdrop-filter: var(--backdrop-filter);
  -webkit-backdrop-filter: var(--webkit-bf);
  border: var(--border);
`;

const TitleDaily = styled(TitleHourly)`
  &::before {
    content: url(${Calendar});
  }
`;

const List = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 65px 40px 1fr 35px 35px;
  justify-content: center;
  justify-self: stretch;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
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
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
`;

const Icon = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
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
  text-align: center;
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
