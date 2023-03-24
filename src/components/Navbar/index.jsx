import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "@/store/cart";

import MarvelLogoSVG from "@/assets/svg/marvel_logo.svg";
import MarvelLogo from "@/assets/marvel_logo.png";
import { ReactComponent as IconCart } from "@/assets/svg/IconCart.svg";

import sumItemsOnCart from "@/utils/sumItemsOnCart";

import { ButtonCart, ContainerNavbar, ContentNavbar, Logo } from "./styles";

export default function Navbar({ openCart }) {
  const { cart } = useSelector(cartSelector);

  const [items, setItems] = useState(0);

  const handleItems = () => {
    const res = sumItemsOnCart(cart);

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
          <IconCart arial-label="Icone do carrinho" />

          {handleItems() > 0 ? (
            <div className="numberItems">{items}</div>
          ) : null}
        </ButtonCart>
      </ContentNavbar>
    </ContainerNavbar>
  );
}
