import styled from "styled-components";
import Uv from "../images/svg/sun.svg";
import Sun from "../images/svg/sunrise.svg";
import Wind from "../images/svg/wind.svg";
import Fallout from "../images/svg/fallout.svg";
import Thermometer from "../images/svg/thermometer.svg";
import Moisture from "../images/svg/moisture.svg";
import Eye from "../images/svg/visibility.svg";
import Atmosphere from "../images/svg/barometer.svg";

const Card = styled.div`
  width: 195px;
  height: 195px;
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: var(--second);
  backdrop-filter: blur(7px);
`;

const handleIconType = (icon) => {
  switch (icon) {
    case "Uv":
      return `url(${Uv})`;
    case "Sun":
      return `url(${Sun})`;
    case "Wind":
      return `url(${Wind})`;
    case "Fallout":
      return `url(${Fallout})`;
    case "Thermometer":
      return `url(${Thermometer})`;
    case "Moisture":
      return `url(${Moisture})`;
    case "Eye":
      return `url(${Eye})`;
    case "Atmosphere":
      return `url(${Atmosphere})`;
  }
};

const Title = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
  &::before {
    content: ${({ icon }) => handleIconType(icon)};
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 0.3rem;
    align-items: center;
    justify-content: center;
    background-size: contain;
  }
`;

const Text = styled.p`
  margin: 0 0 auto 0;
  font-size: 1.7rem;
  font-weight: 300;
`;

const TextRight = styled.p`
  text-align: end;
`;

const Description = styled.p`
  margin: auto 0 0 auto;
  font-size: 1.2rem;
  font-weight: 400;
`;

/* УФ-ИНДЕКС */
const Input = styled.input`
  height: 11px;
  -webkit-appearance: none;
  margin: 0.5rem 0 0 0;
  width: 100%;
  background: transparent;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, green, yellow, orange, red, violet);
    border-radius: 16px;
  }
  &::-webkit-slider-thumb {
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: black;
    -webkit-appearance: none;
    margin-top: 0px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: linear-gradient(to right, green, yellow, orange, red, violet);
  }
  &::-moz-range-track {
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, green, yellow, orange, red, violet);
    border-radius: 16px;
  }
  &::-moz-range-thumb {
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: black;
    border: none;
  }
  &::-ms-track {
    width: 100%;
    height: 5px;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: linear-gradient(to right, green, yellow, orange, red, violet);
    border: 0px solid #000000;
    border-radius: 32px;
    box-shadow: 0px 0px 0px #000000;
  }
  &::-ms-fill-upper {
    background: linear-gradient(to right, green, yellow, orange, red, violet);
    border-radius: 32px;
  }
  &::-ms-thumb {
    margin-top: 1px;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: black;
  }
  &:focus::-ms-fill-lower {
    background: linear-gradient(to right, green, yellow, orange, red, violet);
  }
  &:focus::-ms-fill-upper {
    background: linear-gradient(to right, green, yellow, orange, red, violet);
  }
`;

export { Card, Title, Text, TextRight, Description, Input };
