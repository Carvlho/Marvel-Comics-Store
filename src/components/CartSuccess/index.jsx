import React from "react";

import { ReactComponent as IconSuccess } from "@/assets/svg/IconSuccess.svg";

import { ContainerCartSuccess } from "./styles";

export default function CartSuccess({ isVisible, close }) {
  return (
    <ContainerCartSuccess isVisible={isVisible}>
      <IconSuccess />

      <h4>Compra efetuda com sucesso.</h4>
      <h6>Obrigado por comprar conosco!</h6>

      <button onClick={close}>Voltar ao inicio</button>
    </ContainerCartSuccess>
  );
}
