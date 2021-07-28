/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CgFacebook, CgInstagram } from "react-icons/cg";
import { MenuMobile } from "../MenuMobile";
import { Container, MobileIcon } from "./styles";

export default function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <MenuMobile isOpen={isOpen} toggle={toggle} />

      <img className="logo" src="./logoVibragua.png" alt="Logo Vigrágua" />

      <nav className="navbar">
        <a href="#metodo-magras">INÍCIO</a>
        <a href="#sobre">PRODUTOS</a>
        <a href="#presente">SOBRE</a>
        <a href="#contato">CONTATO</a>
        <a href="#contato">BLOG</a>
      </nav>

      <div className="icons">
        <a
          className="iconInstagram"
          href="https://www.instagram.com/bombasvibragua/"
        >
          <CgInstagram size={24} />
        </a>
        <a
          className="iconFacebook"
          href="https://pt-br.facebook.com/BombasVibragua/"
        >
          <CgFacebook size={24} />
        </a>
      </div>

      <MobileIcon onClick={toggle}>
        <FaBars size={24} />
      </MobileIcon>
    </Container>
  );
}
