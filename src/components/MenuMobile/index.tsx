import React from "react";
import { FaTimes } from "react-icons/fa";

import { Wrapper, Icon, MenuWrapper, Menu, LinkMenu } from "./styles";

export type MenuMobileProps = {
  isOpen: boolean;
  toggle?: () => void;
};

export const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, toggle }) => {
  return (
    <>
      <Wrapper isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <FaTimes color="#fff" size={32} />
        </Icon>
        <MenuWrapper>
          <Menu>
            <LinkMenu href="#metodo-magras">INÍCIO</LinkMenu>
            <LinkMenu href="#about">SOBRE</LinkMenu>
            <LinkMenu href="#product">PRODUTOS</LinkMenu>
            <LinkMenu href="#contact">CONTATO</LinkMenu>
            <LinkMenu href="#blog">BLOG</LinkMenu>
          </Menu>
        </MenuWrapper>
      </Wrapper>
    </>
  );
};
