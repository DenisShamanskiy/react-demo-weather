import styled from "styled-components";

const StyledWrapper1 = styled.div`
position: relative;
grid-column: 1 / 9;
/* width: 100%; */
/* height: 100%; */
width: 900px;
height: 900px; 
padding: 30px;
display: grid;
gap: 10px;
grid-template-columns: repeat(8, 1fr);
grid-template-rows: repeat(8, 1fr);

background-color: #dee8f3;
`;

export { StyledWrapper1 };