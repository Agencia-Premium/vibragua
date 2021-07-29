import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

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
    height: 95.9vh;

    .swiper-button-next,
    .swiper-button-prev {
      color: #fff;
    }

    .swiper-pagination-bullet {
      background: var(--text-primary);
    }

    .swiper-slider {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 90vh;
      }
    }
  }
`;
