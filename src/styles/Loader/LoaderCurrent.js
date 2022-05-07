import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
   0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const LoaderContainer = styled.div`
  width: 398px;
  height: 227.81px;
  margin: 2rem 0 0 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-main);
  grid-column: 1 / 3;
`;

const Loader_1 = styled.div`
  width: 60%;
  height: 29px;
  margin: 0.7rem 0;
  border-radius: 20px;
  animation: ${shimmer} 3s infinite linear;
  background: linear-gradient(to right, #7eb2e5 4%, #badcff 25%, #7eb2e5 36%);
  background-size: 1000px 100%;
`;

const Loader_2 = styled(Loader_1)`
  width: 25%;
  height: 4rem;
`;

const Loader_3 = styled(Loader_1)`
  height: 1.5rem;
`;

export default function LoaderCurrent() {
  return (
    <LoaderContainer>
      <Loader_1></Loader_1>
      <Loader_2></Loader_2>
      <Loader_3></Loader_3>
      <Loader_3></Loader_3>
    </LoaderContainer>
  );
}
