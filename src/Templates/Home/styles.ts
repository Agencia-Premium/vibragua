import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  .swiper {
    width: 100%;
    max-height: 87vh;

    @media screen and (max-width: 1300px) {
      max-height: 80vh;
    }

    @media screen and (max-width: 1000px) {
      max-height: 60vh;
    }

    @media screen and (max-width: 768px) {
      max-height: 40vh;
    }

    @media screen and (max-width: 658px) {
      max-height: 33vh;
    }

    @media screen and (max-width: 576px) {
      max-height: 30vh;
    }

    @media screen and (max-width: 570px) {
      height: 28vh;
    }

    @media screen and (max-width: 532px) {
      height: 26vh;
    }

    @media screen and (max-width: 500px) {
      height: 24vh;
    }

    @media screen and (max-width: 456px) {
      height: 22vh;
    }

    @media screen and (max-width: 419px) {
      height: 20vh;
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: #fff;
    }

    .swiper-pagination-bullet {
      background: #fff;
    }

    .swiper-slider {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 90vh;

        @media screen and (max-width: 1300px) {
          height: 80vh;
        }

        @media screen and (max-width: 1000px) {
          height: 60vh;
        }

        @media screen and (max-width: 768px) {
          height: auto;
        }
      }
    }
  }
`;
