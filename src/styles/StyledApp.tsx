import styled from "styled-components";

interface SizeProps {
  size: number
}

const StyledApp = styled.div<SizeProps>`
  padding: 8px;
  display: grid;
  grid-template-columns: ${(props) => props.size > 1280 ? `repeat(12, 95px)` : `repeat(2, 195px)`};
  gap: 8px;
  justify-items: center;
`;

export default StyledApp;
