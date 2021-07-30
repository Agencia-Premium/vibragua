import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;

  .imgDroplet {
    position: absolute;
    left: 0%;
    top: 0%;
    width: 30%;
  }
  h2 {
    color: var(--text-primary);
    margin: 5rem 0;
    font-size: 2.5rem;
    line-height: 27px;
  }
  .ContainerDirection {
    max-width: 1920px;
  }
  #ContainerLeft {
    .img {
      position: relative;
      img {
        position: relative;
        width: 100%;
      }
    }
  }
  #ContainerRight {
    display: flex;
    padding: 0 2rem;
    flex-direction: column;
    align-items: center;

    .tituloImg {
      display: flex;
      justify-content: center;
      padding: 2.5rem 0;
      width: 100%;
      img {
        /* width: 70%; */
        height: 50%;
      }
    }

    .paragrafos {
      display: inline-flex;
      gap: 1rem;
      flex-direction: column;
      text-align: justify;
      padding-bottom: 1rem;
      font-size: 1.4rem;
      line-height: 2.4rem;
      margin-bottom: 1.7rem;
    }
    .containerSelo {
      display: inline-flex;
      justify-content: space-around;

      width: 100%;

      gap: 5rem;

      img {
        width: 100%;
        height: 10rem;
      }
    }
  }
`;
