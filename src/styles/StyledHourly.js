import styled from "styled-components";
import Clock from "../images/svg/clock.svg";

const Container = styled.article`
  width: 100%;
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-main);
  background-color: var(--second);
  grid-column: 1 / 3;
  ${"" /* фон */}
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  backdrop-filter: var(--backdrop-filter);
  -webkit-backdrop-filter: var(--webkit-bf);
  border: var(--border);
`;

const TitleHourly = styled.h2`
  margin: 0;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  font-size: 0.8rem;
  font-weight: 500;
  &::before {
    content: url(${Clock});
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
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
  }
`;

const Item = styled.li`
  min-width: 62px;
  height: 80px;
  margin: 0.3rem 0 0 0;
  display: flex;
  flex-direction: column;
`;

const Time = styled.p`
  width: 100%;
  height: 20px;
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 0.9rem;
  line-height: 20px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 auto;
`;

const Temperature = styled.p`
  width: 100%;
  height: 20px;
  margin: 0;
  text-align: center;
  font-size: 0.9rem;
`;

export { Container, TitleHourly, List, Item, Time, Icon, Temperature };
