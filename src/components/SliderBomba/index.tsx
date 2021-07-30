import React from "react";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

export function SliderBomba(): JSX.Element {
  return (
    <Container>
      <div className="containerTituloImg" id="product">
        <img src="./img/SliderBomba/titulo.png" alt="" className="tituloImg" />
      </div>
      <Swiper
        className="swiper"
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        // navigation
        autoplay={{ delay: 8000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="swiper ">
          <div className="containerCard">
            <div className="left">
              <p className="textTitulo --titulo">Bomba Vibrágua 1200</p>
              <img
                src="./img/SliderBomba/1200.png"
                alt="Bomba de água mil e duzentos"
                className="imgBomba"
              />
            </div>
            <div className="right">
              <div className="containerParagrafo">
                <h2 className="titulo2 --titulo">Descrição Técnica</h2>
                <p className="Paragrafo">
                  Potência: 450w Elevação Máxima: 65 metros Saida: 1 Bobina em
                  Fio de Cobre Voltagem: 127v / 220v 60Hz
                </p>
                <h2 className="titulo2 --titulo">Indicações</h2>
                <p className="Paragrafo">
                  A Vibrágua 1200 Fio de Cobre foi desenvolvida para alto
                  rendimento e durabilidade, bobina em fio de cobre, alta vazão
                  e pressão, possui saída de 1 polegada. Ideal para
                  abastastecimento doméstico pequenas irrigações e criações de
                  animais.{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <div className="containerCard">
            <div className="left">
              <p className="textTitulo --titulo">Bomba Vibrágua 950</p>
              <img
                src="./img/SliderBomba/950.png"
                alt="Bomba de água mil e duzentos"
                className="imgBomba"
              />
            </div>
            <div className="right">
              <div className="containerParagrafo">
                <h2 className="titulo2 --titulo">Descrição Técnica</h2>
                <p className="Paragrafo">
                  Potência: 450w Elevação Máxima: 65 metros Saida: 1 Voltagem:
                  127v / 220v 60Hz
                </p>
                <h2 className="titulo2 --titulo">Indicações</h2>
                <p className="Paragrafo">
                  A Vibrágua 950 foi desenvolvida com a maior vazão da linha
                  Vibrágua, possui saída de 1 polegada, com rendimento com alta
                  vazão e pressão, unindo tecnologia e eficência. Ideal para
                  abasteciemento doméstico pequenas irrigações e criações de
                  animais.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper">
          <div className="containerCard">
            <div className="left">
              <p className="textTitulo --titulo">Bomba Vibrágua 900</p>
              <img
                src="./img/SliderBomba/900.png"
                alt="Bomba de água mil e duzentos"
                className="imgBomba"
              />
            </div>
            <div className="right">
              <div className="containerParagrafo">
                <h2 className="titulo2 --titulo">Descrição Técnica</h2>
                <p className="Paragrafo">
                  Potência: 400w Elevação Máxima: 65 metros Saida: 3/4 Voltagem:
                  127v / 220v 60Hz
                </p>
                <h2 className="titulo2 --titulo">Indicações</h2>
                <p className="Paragrafo">
                  A Vibrágua 900 Turbo foi especialmente projetada com alta
                  performace no seu rendimento elevação e pressão. Possui um
                  corpo menor, porém alta eficiência, caracteriza-se pelo
                  excelente rendimento e durabilidade. Ideal para abastecimento
                  doméstico, pequenas irrigações e criações de animais.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper">
          <div className="containerCard">
            <div className="left">
              <p className="textTitulo --titulo">Bomba Vibrágua 800</p>
              <img
                src="./img/SliderBomba/800.png"
                alt="Bomba de água mil e duzentos"
                className="imgBomba"
              />
            </div>
            <div className="right">
              <div className="containerParagrafo">
                <h2 className="titulo2 --titulo">Descrição Técnica</h2>
                <p className="Paragrafo">
                  Potência: 800w Elevação Máxima: 50 metros Saida: 3/4 Voltagem:
                  127v / 220v 60Hz
                </p>
                <h2 className="titulo2 --titulo">Indicações</h2>
                <p className="Paragrafo">
                  A Vibrágua 800 foi especialmente projetada para melhor
                  desemplenho em trasferência de água para uma residência,
                  capaciade de alcançar maior vazão com baixa potência. Ideal
                  para o abastecimento doméstico para pequenas irrigações e
                  criação de animais.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper">
          <div className="containerCard">
            <div className="left">
              <p className="textTitulo --titulo">Bomba Vibrágua 600</p>
              <img
                src="./img/SliderBomba/600.png"
                alt="Bomba de água mil e duzentos"
                className="imgBomba"
              />
            </div>
            <div className="right">
              <div className="containerParagrafo">
                <h2 className="titulo2 --titulo">Descrição Técnica</h2>
                <p className="Paragrafo">
                  Potência: 200w Elevação Máxima: 50 metros Saida: 320 a 1400
                  L/H Voltagem: 127v
                </p>
                <h2 className="titulo2 --titulo">Indicações</h2>
                <p className="Paragrafo">
                  Projetada para uso doméstico, onde combina eficiência e baixo
                  consumo de energia, sendo ideal para atenderas necessidades
                  básicas de abastecimento de água de uma residência, com a
                  garantia e qualidade Vibrágua que é certificada
                  internacionalmente pela ISO9001
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
