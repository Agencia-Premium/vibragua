/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import droplet from "../../../public/img/About/droplet.webp";
import ImgLogo from "../../../public/img/About/logo.webp";
import ImgSelo1 from "../../../public/img/About/iconOne.webp";
import ImgSelo2 from "../../../public/img/About/iconTwo.webp";
import { Container } from "./styles";
import { ContainerQuery } from "./stylesQuery";

export function About(): JSX.Element {
  return (
    <ContainerQuery>
      <Container>
        <div className="imgDroplet" id="about">
          <figure className="droplet">
            <Image src={droplet} alt="uma gota de água." />
          </figure>
        </div>
        <h2>Sobre Nós</h2>
        <div className="ContainerDirection">
          <div id="ContainerLeft">
            <figure className="img">
              <img
                src="./img/About/vibragua.webp"
                alt="uma foto de um platil sendo regado pela bomba vibrágua"
              />
            </figure>
          </div>
          <div id="ContainerRight">
            <figure className="tituloImg">
              <Image src={ImgLogo} alt="logo escrito vibrágua em azul"></Image>
            </figure>
            <div className="paragrafos">
              <p>
                A Vibrágua é uma indústria de bombas submersas, que atua a mais
                de 20 anos na região Norte. Nossa Tecnologia foi desenvolvida
                para fornecer o que há de melhor no mercado quando falamos de
                qualidade e tempo útil do produto.
              </p>
              <p>
                A Vibrágua em busca de estar sempre inovando, e agora obteve o
                certificado ISO 9001, onde está atendendo a todos os requesitos
                de padronagem nacional e internacional de fabricação de bombas
                submersas.
              </p>
            </div>
            <figure className="containerSelo">
              <Image
                src={ImgSelo1}
                alt="Selo de mais de 20 anos de mercado"
                className="selo1"
              ></Image>
              <Image
                src={ImgSelo2}
                alt="Selo do iso nove mil e hum"
                className="selo2"
              ></Image>
            </figure>
          </div>
        </div>
      </Container>
    </ContainerQuery>
  );
}
