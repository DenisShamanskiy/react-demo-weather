import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 425px;
  padding: 0.9rem;
  text-align: center;
`;

export default function Footer() {
  return <StyledFooter>© 2022 Денис Шаманский</StyledFooter>;
}
