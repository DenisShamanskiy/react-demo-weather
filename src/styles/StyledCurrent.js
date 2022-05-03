import styled from "styled-components";

const StyledCard = styled.div`
  width: 100%;
  margin: 2rem 0 0 0;
  padding: 1rem;
  grid-column: 1 / 3;
  text-align: center;
  box-sizing: border-box;
  color: var(--third);
`;

const City = styled.h1`
  font-family: var(--font-family-Jost);
  font-weight: 400;
  font-size: 1.6rem;
`;

const Temperature = styled.p`
  margin: 0;
  font-family: var(--font-family-Jost);
  font-weight: 200;
  font-size: 4rem;
`;

const Description = styled.p`
  margin: 0.7rem;
  font-family: var(--font-family-Jost);
  font-weight: 400;
  font-size: 1rem;
`;

export { StyledCard, City, Temperature, Description };
