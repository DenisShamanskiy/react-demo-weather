import styled from "styled-components";
import ExclamationCircle from "../images/svg/exclamation-circle.svg";
import PlusCircle from "../images/svg/plus-circle.svg";
import DashCircle from "../images/svg/dash-circle.svg";
import InfoSquare from "../images/svg/info_square.svg";

interface OpenProps {
  open: boolean
}

const StyledAlerts = styled.article`
  width: 100%;
  border-radius: var(--radius-main);
  grid-column: 1 / 3;
  ${"" /* фон */}
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  backdrop-filter: var(--backdrop-filter);
  -webkit-backdrop-filter: var(--webkit-bf);
  border: var(--border);
`;

const Header = styled.h2<OpenProps>`
  margin: 0;
  padding: 0.9rem;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: var(--radius-main);
  cursor: pointer;
  transform: translate3d(0, 0, 0);
  transition: all 0.5s;

  border-radius: ${(props) =>
    props.open
      ? `var(--radius-main) var(--radius-main) 0 0`
      : `var(--radius-main)`};

  &::before {
    content: url(${ExclamationCircle});
    min-width: 20px;
    height: 20px;
    margin-right: 0.9rem;
  }

  &::after {
    content: ${(props) =>
      props.open ? `url(${DashCircle})` : `url(${PlusCircle})`};
    min-width: 20px;
    height: 20px;
    margin-left: auto;
    transition: transform 0.5s ease-in-out;
    transform: ${(props) => (props.open ? `rotate(-360deg)` : ``)};
  }
`;

const Content = styled.ul<OpenProps>`
  max-height: ${(props) => (props.open ? `350px` : `0`)};
  margin: 0;
  padding: ${(props) => (props.open ? `0.9rem 0.9rem 0.9rem 1.1rem` : ``)};
  border-radius: ${(props) =>
    props.open
      ? `0 0 var(--radius-main) var(--radius-main)`
      : `var(--radius-main)`};
  overflow: ${(props) => (props.open ? `scroll` : `hidden`)};
  opacity: ${(props) => (props.open ? `1` : `0`)};
  transition: all 0.5s;
  cursor: ${(props) => (props.open ? `pointer` : ``)};

  border-top: ${(props) => (props.open ? `1px solid var(--border-color)` : ``)};
`;

const Item = styled.li`
  width: 100%;
  margin-bottom: 0.4rem;
  padding: 0;
  display: flex;
  font-size: 0.9rem;
  &::before {
    content: url(${InfoSquare});
    min-width: 16px;
    height: 16px;
    margin-right: 0.9rem;
  }
`;

const Description = styled.div`
  width: 100%;
  margin-bottom: 0.4rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  line-height: 20px;
  border-bottom: 1px solid var(--border-color);
  &:last-child {
    margin: 0;
  }
`;

const Event = styled.p`
  margin: 0 0 0.4rem 0;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.2rem;
`;

const Text = styled.p`
  margin: 0 0 0.2rem 0;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 400;
`;

export { StyledAlerts, Header, Content, Item, Description, Event, Text };
