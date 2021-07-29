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
    }
  }
`;
