import styled from "styled-components";

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
  gap: 2rem;
`;
