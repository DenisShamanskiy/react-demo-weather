import styled from "styled-components";
import Calendar from "../images/svg/calendar.svg";

const Container = styled.article`
  width: 398px;
  padding: 0.9rem 0.9rem 0 0.9rem;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-main);
  background-color: var(--second);
  grid-column: 1 / 3;
`;

const Title = styled.h2`
  height: 29px;
  margin: 0;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  font-size: 0.8rem;
  font-weight: 500;
  &::before {
    content: url(${Calendar});
    width: 20px;
    height: 20px;
    margin-right: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: contain;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  &:last-child {
    border: none;
  }
`;

const Item = styled.li`
  height: 2.5rem;
  display: grid;
  grid-template-columns: 65px 40px 1fr 35px 35px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  &:last-child {
    border: none;
  }
`;

const Day = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
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
  Title,
  List,
  Item,
  Day,
  Icon,
  Wrapper,
  Description,
  Precipitation,
  Temperature,
};
