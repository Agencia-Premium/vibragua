import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  padding: 4rem 10rem;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding: 4rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    text-align: center;
    color: var(--text-primary);
    font-size: 3.6rem;
    padding-bottom: 4rem;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }

  .imgContainer {
    margin-top: 8rem;

    @media screen and (min-width: 768px) {
      margin-top: 12rem;
    }

    .gota {
      max-width: 30%;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  height: 70rem;

  display: flex;
  box-shadow: 1px 2px 10px 9px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40rem;
    height: auto;

    /* position: relative; */
  }

  @media screen and (max-width: 550px) {
    width: 30rem;
    height: auto;
  }

  .left {
    width: 50%;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 30rem;
    }

    img {
      width: 100%;
      height: 100%;
      border-bottom-left-radius: 1rem;
      border-top-left-radius: 1rem;

      @media screen and (max-width: 768px) {
        border-bottom-left-radius: 0;
        border-top-right-radius: 1rem;
      }
    }
  }

  .right {
    width: 50%;

    height: 100%;
    padding: 4rem 2rem;

    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
      padding: 0;

      width: 100%;
    }
  }
`;
