import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 20rem;

  padding: 4rem 10rem;

  h1 {
    text-align: center;
    color: var(--text-primary);
    font-size: 3.6rem;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  height: 70rem;

  /* background-image: url("./bg.png");
  background-repeat: no-repeat;
  background-size: 50%; */

  display: flex;
  box-shadow: 1px 2px 10px 9px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .left {
    width: 50%;
    img {
      width: 100%;
      height: 100%;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
    }
  }

  .right {
    padding: 10rem;
    width: 50%;

    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
