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

        p {
          font-size: 3rem;
          color: #fff;
          margin-bottom: 4rem;
        }

        a {
          text-decoration: 0;
          padding: 2rem 6rem;
          border-radius: 1rem;
          background: #ffffff;
          border: 1px solid #fff;
          color: #00aeef;
          font-size: 2rem;

          cursor: pointer;

          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.8);
          }
        }
      }
    }
  }
`;
