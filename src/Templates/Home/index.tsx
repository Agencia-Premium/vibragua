import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function HomePage(): JSX.Element {
  return (
    <Container>
      <Swiper
        className="swiper"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 8000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="swiper-slider">
          <img src="./banner.png" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Container>
  );
}
