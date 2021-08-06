/* eslint-disable @next/next/no-html-link-for-pages */
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function HomePage(): JSX.Element {
  return (
    <Container id="home">
      <Swiper
        className="swiper"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 8000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="swiper-slider">
          {/* <div className="content">
            <p>
              A Vibrágua é uma indústria de bombas submersas, que atua a mais de
              20 anos na região Norte.
            </p>

            <a href="/story">Conheça nossa História</a>
          </div> */}
          <img src="./banner1.png" alt="banner" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./banner2.png" alt="banner" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./banner3.png" alt="banner" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
