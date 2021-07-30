import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 10rem 2rem 2rem;
`;

export const Separator = styled.div`
  padding: 2rem 26rem;

  @media screen and (max-width: 1024px) {
    padding: 2rem 10rem;
  }

  @media screen and (max-width: 426px) {
    padding: 2rem 4rem;
  }

  @media screen and (max-width: 321px) {
    padding: 2rem 3rem;
  }

  h2,
  h1 {
    text-align: center;
    color: var(--text-primary);
    padding-bottom: 2rem;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.6rem;
  }

  p {
    text-align: justify;
    line-height: 2.4rem;
    font-size: 1.8rem;
  }
`;
