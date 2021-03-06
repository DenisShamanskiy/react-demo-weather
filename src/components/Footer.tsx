// import React from "react";
import styled from "styled-components";

const StyledFooter: any = styled.footer`
  width: 425px;
  padding: 0.9rem;
  text-align: center;
`;

// console.log("Footer");


const Footer: React.FC = (): React.ReactElement => {
 return <StyledFooter>© 2022 Денис Шаманский</StyledFooter>
}

export default Footer