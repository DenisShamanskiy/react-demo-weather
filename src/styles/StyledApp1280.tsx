import styled from "styled-components";

const StyledApp1280 = styled.div`
  margin-top: 50px;
  padding: 40px;
  min-height: 1000px;
  display: grid;
  grid-template-columns: repeat(12, 95px);
  gap: 8px;
  justify-items: center;
  background-color: #f6f6f6;
  border-radius: 30px;
`;

const Wrapper = styled.div`
  width: 100%;
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 50px repeat(8, 80px);
  /* margin: auto 0; */
  
`;

export default StyledApp1280;
export { StyledApp1280, Wrapper };
