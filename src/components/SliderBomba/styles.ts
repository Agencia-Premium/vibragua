import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  /* margin-bottom: 20rem; */

  .containerTituloImg {
    width: 100%;
    padding: 2.5rem 0;

    img {
      width: 100%;
    }
  }
  .containerCard {
    //mudar para flex mais tarde.
    margin: 2rem;
    .--titulo {
      line-height: 2.43rem;
      color: var(--text-primary);
      font-weight: 700;
    }
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .textTitulo {
        font-size: 2.5rem;
        margin-bottom: 3.2rem;
      }
      .imgBomba {
        width: 50%;
      }
    }
    .right {
      .containerParagrafo {
        .titulo2 {
          font-size: 1.9rem;
          margin: 1.2rem 0;
        }
        .Paragrafo {
          font-size: 1.5rem;
          line-height: 2.5rem;
          font-weight: 400;
          text-align: justify;
        }
      }
    }
  }
  //css do swiper
  .swiper {
    /* background-color: #f6f6f6; */
    width: 100%;
    height: 100vh;

    .swiper-button-next,
    .swiper-button-prev {
      color: #fff;
    }

    .swiper-pagination-bullet {
      background: var(--text-primary);
    }

    .swiper-slider {
      /* width: 100%; */
      /* height: 100%; */

      img {
        width: 100%;
        height: 90vh;
      }
    }
  }
  @media screen and (max-width: 420px) {
    .swiper {
      height: 100%;
    }
  }
  @media screen and (min-width: 724px) {
    height: 128vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .containerCard {
      width: 100%;
      height: 5rem;
    }
    .swiper {
      height: 72.9vh;
    }
    .containerCard {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 98rem;
      height: 32rem;
    }
    .left {
      width: 50%;
    }

    .right {
      width: 40%;
    }
    .containerCard .left .imgBomba {
      width: 30%;
    }
  }
  @media screen and (min-width: 1024px) {
    .containerTituloImg {
      width: 50%;
    }

    .swiper {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .containerCard .left .imgBomba {
      width: 50%;
    }

    .--titulo {
      font-size: 3rem !important;
    }
    .right .Paragrafo {
      font-size: 2rem !important;
    }
    .right {
      width: 70%;
    }
  }
`;
