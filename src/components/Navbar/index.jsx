import React from "react";

import MarvelLogoSVG from "@/assets/svg/marvel_logo.svg";
import MarvelLogo from "@/assets/marvel_logo.png";
import { ReactComponent as IconCart } from "@/assets/svg/IconCart.svg";

import { ContainerNavbar, ContentNavbar, Logo } from "./styles";

export default function Navbar({ openCart }) {
  return (
    <ContainerNavbar>
      <ContentNavbar>
        <Logo>
          <source srcSet={MarvelLogoSVG} type="image/svg+xml" />
          <img src={MarvelLogo} alt="Marvel Logo" />
        </Logo>
        <IconCart
          arial-label="Icone do carrinho"
          fill="#fff"
          onClick={openCart}
        />
      </ContentNavbar>
    </ContainerNavbar>
  );
}
