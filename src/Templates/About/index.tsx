import React from "react";
import Image from "next/image";
import droplet from "../../../public/img/About/droplet.svg";
import ImgSobre from "../../../public/img/About/vibragua.jpg";
import ImgLogo from "../../../public/img/About/logo.png";
import ImgSelo1 from "../../../public/img/About/iconOne.png";
import ImgSelo2 from "../../../public/img/About/iconTwo.png";
import { Container } from "./styles";
export default function About(): JSX.Element {
  return (
    <Container>
      <div className="imgDroplet">
        <figure className="droplet">
          <Image src={droplet} alt="uma gota de água." />
        </figure>
      </div>
      <h2>Sobre Nós</h2>
      <div id="ContainerLeft">
        <figure className="img">
          <Image
            src={ImgSobre}
            alt="uma foto de um platil sendo regado pela bomba vibrágua"
          ></Image>
        </figure>
      </div>
      <div id="ContainerRight">
        <figure className="tituloImg">
          <Image src={ImgLogo} alt="logo escrito vibrágua em azul"></Image>
        </figure>
        <div className="paragrafos">
          <p>
            A Vibrágua é uma indústria de bombas submersas, que atua a mais de
            20 anos na região Norte. Nossa Tecnologia foi desenvolvida para
            fornecer o que há de melhor no mercado quando falamos de qualidade e
            tempo útil do produto.
          </p>
          <p>
            A Vibrágua em busca de estar sempre inovando, e agora obteve o
            certificado ISO 9001, onde está atendendo a todos os requesitos de
            padronagem nacional e internacional de fabricação de bombas
            submersas.
          </p>
        </div>
        <figure>
          <Image
            src={ImgSelo1}
            alt="Selo de mais de 20 anos de mercado"
          ></Image>
          <Image src={ImgSelo2} alt="Selo do iso nove mil e hum"></Image>
        </figure>
      </div>
    </Container>
  );
}
