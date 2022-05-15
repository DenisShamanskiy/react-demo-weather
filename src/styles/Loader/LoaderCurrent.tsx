// import React from "react";
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

const LoaderFirst = styled.div`
  width: 60%;
  height: 29px;
  margin: 0.7rem 0;
  border-radius: 20px;
  animation: ${shimmer} 3s infinite linear;
  background: linear-gradient(to right, #7eb2e5 4%, #badcff 25%, #7eb2e5 36%);
  background-size: 1000px 100%;
`;

const LoaderSecond = styled(LoaderFirst)`
  width: 25%;
  height: 4rem;
`;

const LoaderThird = styled(LoaderFirst)`
  height: 1.5rem;
`;

export default function LoaderCurrent() {
  return (
    <LoaderContainer>
      <LoaderFirst></LoaderFirst>
      <LoaderSecond></LoaderSecond>
      <LoaderThird></LoaderThird>
      <LoaderThird></LoaderThird>
    </LoaderContainer>
  );
}
