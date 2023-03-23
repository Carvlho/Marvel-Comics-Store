import React from "react";
import { ModalContainer, ModalOverlay, ModalView } from "./styles";

export default function ModalCart({ isOpen, close }) {
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalOverlay onClick={close}>
        <ModalView isOpen={isOpen}></ModalView>
      </ModalOverlay>
    </ModalContainer>
  );
}
