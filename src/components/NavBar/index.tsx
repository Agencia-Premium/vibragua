/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CgFacebook, CgInstagram } from "react-icons/cg";
import { MenuMobile } from "../MenuMobile";
import { Container, MobileIcon } from "./styles";

interface NavBarURL {
  linkHome: string;
  linkAbout: string;
  linkProduct: string;
  linkContact: string;
  linkBlog: string;
}

export default function NavBar(props: NavBarURL): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <MenuMobile isOpen={isOpen} toggle={toggle} />

      <img className="logo" src="./logoVibragua.png" alt="Logo Vigrágua" />

      <nav className="navbar">
        <a href={props.linkHome}>INÍCIO</a>
        <a href={props.linkAbout}>SOBRE</a>
        <a href={props.linkProduct}>PRODUTOS</a>
        <a href={props.linkContact}>CONTATO</a>
        {/* <a href={props.linkBlog}>BLOG</a> */}
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
