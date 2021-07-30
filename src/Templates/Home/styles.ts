import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  .swiper {
    background: var(--gradient);
    width: 100%;
    max-height: 87vh;

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
      }

      .content {
        position: absolute;
        top: 40%;
        left: 20%;
        max-width: 60rem;

        @media screen and (max-width: 426px) {
          top: 50%;
          max-width: 30rem;
          left: 15%;
        }

        @media screen and (max-width: 376px) {
          left: 10%;
          top: 52%;
        }

        p {
          font-size: 3rem;
          color: #fff;
          margin-bottom: 4rem;

          @media screen and (max-width: 1024px) {
            font-size: 2.6rem;
            max-width: 50rem;
          }

          @media screen and (max-width: 768px) {
            font-size: 2rem;
            max-width: 40rem;
          }

          @media screen and (max-width: 560px) {
            font-size: 1.8rem;
            max-width: 30rem;
          }
        }

        a {
          text-decoration: none;
          padding: 2rem 6rem;
          border-radius: 1rem;
          background: #ffffff;
          border: 1px solid #fff;
          color: #00aeef;
          font-size: 2rem;

          cursor: pointer;

          transition: filter 0.2s;

          @media screen and (max-width: 768px) {
            padding: 1.6rem 2rem;
          }

          @media screen and (max-width: 378px) {
            padding: 1.4rem 1.8rem;
            font-size: 1.8rem;
          }

          &:hover {
            filter: brightness(0.8);
          }
        }
      }
    }
  }
`;
