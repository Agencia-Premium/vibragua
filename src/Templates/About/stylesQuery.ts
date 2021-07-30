import styled from "styled-components";

export const ContainerQuery = styled.section`
  //tela pc 1024px
  @media screen and (min-width: 1024px) {
    .ContainerDirection {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .droplet {
      max-width: 70%;
    }

    .imgDroplet {
      max-width: 100%;
    }

    #ContainerLeft {
      width: 40%;
      .img {
        img {
          width: 100%;
          border-radius: 0 1rem 1rem 0;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
      }
      //ativar apena no pc
      .img::before {
        content: "";
        height: 100%;
        width: 100%;
        background: var(--bg-color);
        position: absolute;
        top: -10.8%;
        left: -27.7%;
        border-radius: 1rem;
        z-index: 0;
      }
    }
    h2 {
      display: inline-block;
      text-align: center;
      font-size: 3.2rem;
      line-height: 54px;
      margin-bottom: 12rem;
    }
    #ContainerRight {
      width: 60%;

      .tituloImg {
        /* padding: 0; */
      }

      .containerSelo {
        margin-top: 3.6rem;
        width: 100%;
        img {
          width: 100%;
          height: 8rem;
        }
      }
      .paragrafos {
        width: 90%;
        font-size: 1.6rem;
        line-height: 2.4rem;
        font-weight: 400;
      }
    }
  }

  //tela pc 1920px
  @media screen and (min-width: 1920px) {
    #ContainerLeft {
      width: 50%;
      .img {
        img {
          position: relative;
          width: 100%;
          top: 0;
          left: -9.8rem;
        }
      }

      .img::before {
        top: -7.8%;
      }
    }
    h2 {
      margin-bottom: 15rem;
    }
    #ContainerRight {
      width: 50%;
      height: 76rem;
      justify-content: space-around;

      .paragrafos {
        display: flex;
        gap: 2rem;
        flex-direction: column;
      }
      .containerSelo {
        img {
          height: 15rem;
        }
      }
    }
  }
`;
