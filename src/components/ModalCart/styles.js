import styled, { css } from "styled-components";

export const ModalContainer = styled.div`
  visibility: ${({ isOpen }) => (isOpen ? "unset" : "hidden")};
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;

  right: ${({ isOpen }) => (isOpen ? 0 : "-110%")};
  transition: ${({ isOpen }) => (isOpen ? 350 : 150)}ms;
`;

export const ModalView = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  width: 50vw;
  height: 100vh;

  right: ${({ isOpen }) => (isOpen ? 0 : "-110%")};
  transition: ${({ isOpen }) => (isOpen ? 350 : 450)}ms;
`;
