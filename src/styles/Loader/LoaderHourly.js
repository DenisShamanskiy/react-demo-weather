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
  height: 144.59px;
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  border-radius: var(--radius-main);
  grid-column: 1 / 3;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  backdrop-filter: var(--backdrop-filter);
  -webkit-backdrop-filter: var(--webkit-bf);
`;

const Title = styled.div`
  height: 25px;
  margin-bottom: 4px;
  border-radius: var(--radius-main);

  animation: ${shimmer} 3s infinite linear;
  background: linear-gradient(to right, #a3d1ff 4%, #8dc6ff 25%, #a3d1ff 36%);
  background-size: 1000px 100%;
`;

const List = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Item = styled.div`
  min-width: 62px;
  height: 80px;
  margin: 0.3rem 0 0 0;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-main);

  animation: ${shimmer} 3s infinite linear;
  background: linear-gradient(to right, #a3d1ff 4%, #8dc6ff 25%, #a3d1ff 36%);
  background-size: 1000px 100%;
`;

export default function LoaderHourly() {
  return (
    <LoaderContainer>
      <Title></Title>
      <List>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </List>
    </LoaderContainer>
  );
}
