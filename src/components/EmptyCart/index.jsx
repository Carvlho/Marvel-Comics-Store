import React from "react";

import { ReactComponent as IconCart } from "@/assets/svg/IconCart.svg";
import { ReactComponent as IconCartEmpty } from "@/assets/svg/IconCartEmpty.svg";

import { ContainerCartEmpty } from "./styles";

export default function EmptyCart({ close }) {
  return (
    <ContainerCartEmpty>
      <IconCartEmpty />

      <h3>Parece que seu carrinho está vazio.</h3>
      <h6>Quer olhar alguns produto?</h6>

      <button onClick={close}>
        <IconCart />
        Continuar comprando
      </button>
    </ContainerCartEmpty>
  );
}
