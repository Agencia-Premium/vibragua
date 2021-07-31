import styled, { keyframes } from "styled-components";

export const titleAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(-0px)
  }
`;

export const Title = styled.h1`
  margin-top: 2rem;
  text-align: center;
  animation: ${titleAnimation} 2s;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 4rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 4rem;
  column-gap: 2rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;
