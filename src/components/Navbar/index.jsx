import React, { useEffect, useState } from "react";

import MarvelLogoSVG from "@/assets/svg/marvel_logo.svg";
import MarvelLogo from "@/assets/marvel_logo.png";
import { ReactComponent as IconCart } from "@/assets/svg/IconCart.svg";

import sumItemsOnCart from "@/utils/sumItemsOnCart";

import { ButtonCart, ContainerNavbar, ContentNavbar, Logo } from "./styles";

export default function Navbar({ openCart }) {
  const [items, setItems] = useState(0);

  const handleItems = () => {
    const res = sumItemsOnCart();

    if (res != items) {
      setItems(res);
    }

    return res;
  };

  return (
    <ContainerNavbar>
      <ContentNavbar>
        <Logo>
          <source srcSet={MarvelLogoSVG} type="image/svg+xml" />
          <img src={MarvelLogo} alt="Marvel Logo" />
        </Logo>
        <ButtonCart onClick={openCart}>
          <IconCart arial-label="Icone do carrinho" fill="#fff" />

          {handleItems() > 0 ? (
            <div className="numberItems">{items}</div>
          ) : null}
        </ButtonCart>
      </ContentNavbar>
    </ContainerNavbar>
  );
}
