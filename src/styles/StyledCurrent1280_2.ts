import styled from "styled-components";

const StyledCard1280 = styled.div`
position: relative;
  width: 100%;
  max-height: 400px;
  margin: 0 0 30px 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  color: var(--third);
  background-color: #8dc6ff;
  border-radius: var(--br-20);
  grid-column: 1 / 2;
  grid-row: 2 / 7;
`;

const City = styled.h1`
  margin: 0.7rem 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  color: white;
`

const Temperature = styled.p`
  margin: auto;
  font-weight: 200;
  font-size: 4rem;
  color: white;
`;

const Description = styled.p`
  margin: 0.7rem;
  font-weight: 400;
  font-size: 1rem;
  color: white;
`;

const DescriptionTemp = styled(Description)`
  grid-column: 1 / 4;
`;

const Humidity = styled.div`
width: 85%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 7px;
font-size: 0.8rem;
color: white;
/* display: grid;
grid-template-columns: 1fr 1fr; */
/* gap: 10px */
`
const HumidityTitle = styled.p`
  width: 50%;
  display: block;
  margin: 0;
  margin: 0 15px 0 0;
`
const HumidityValue = styled.p`
  width: 50%;
  display: block;
  margin: 0 auto 0 0;
  padding-left: 15px;
  border-left: 1px solid black;
`

export { StyledCard1280, City, Temperature, Description, DescriptionTemp, Humidity, HumidityTitle, HumidityValue };
