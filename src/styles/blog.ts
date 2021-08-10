import styled from "styled-components";

export const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  padding: 4rem 0;
  background: #fff;
  color: #333;
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background: #fff;

  display: flex;
  justify-content: center;
  /* padding: 2rem 10rem; */

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .content {
    width: 100%;
    height: 100%;

    padding: 0 6rem;

    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;

    @media screen and (max-width: 1260px) {
      flex-direction: column;
      padding: 0 2rem;
    }

    .left {
      img {
        width: 100%;
      }

      @media screen and (max-width: 1260px) {
        img {
          width: 100%;
        }
      }
    }

    .right {
      width: 60%;

      @media screen and (max-width: 1260px) {
        width: 100%;
      }
    }

    h6 {
      font-size: 2rem;
      padding: 2rem 0;
      color: #333;
      text-align: center;
    }

    p {
      font-size: 1.6rem;
      padding: 0.2rem 0 0.8rem 2rem;
      text-align: justify;
    }
  }
`;
