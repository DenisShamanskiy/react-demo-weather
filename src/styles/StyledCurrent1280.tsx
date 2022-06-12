import styled from "styled-components";

const StyledCard1280 = styled.div`
position: relative;
  width: 100%;
  max-height: 400px;
  margin: 0;
  padding: 1rem;
  grid-column: 1 / 13;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: repeat(8, 100fr);
  text-align: center;
  box-sizing: border-box;
  color: var(--third);
  background-color: #8dc6ff;
  border-radius: 30px;
`;

const City = styled.h1`
  margin: 0.7rem 0;
  font-family: var(--font-family-Jost);
  font-weight: 400;
  font-size: 2.5rem;
  grid-column: 1 / 4;
`;

const Temperature = styled.p`
  margin: auto;
  font-family: var(--font-family-Jost);
  font-weight: 200;
  font-size: 4rem;
  grid-column: 1 / 4;
  grid-row: 2 / 4;
`;

const Description = styled.p`
  margin: 0.7rem;
  font-family: var(--font-family-Jost);
  font-weight: 400;
  font-size: 1.5rem;
  grid-column: 1 / 4;
`;

const DescriptionTemp = styled(Description)`
  grid-column: 1 / 4;
`;

export { StyledCard1280, City, Temperature, Description, DescriptionTemp };
