import styled, { keyframes } from "styled-components";

const backgroundAnimation = keyframes`
  100% {
    background-position: left;
  }
`;

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

  width: 50vw;
  height: 100vh;

  right: ${({ isOpen }) => (isOpen ? 0 : "-110%")};
  transition: ${({ isOpen }) => (isOpen ? 350 : 450)}ms;
`;

export const ModalHeader = styled.div`
  position: relative;
  top: 0;
  width: 100%;

  background-color: #000000;

  z-index: 2;
`;

export const ModalHeaderContent = styled.div`
  position: relative;

  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 30px;

  h4 {
    color: #fff;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  left: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  cursor: pointer;

  -webkit-appearance: none;

  svg {
    width: 32px;
    height: auto;
    fill: #fff;
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 1rem;

  padding: 50px 30px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const ItemImage = styled.img`
  display: ${({ isLoading }) => (isLoading ? "none" : "block")};
  position: relative;

  width: 100%;
  max-width: 100px;
  height: auto;

  object-fit: cover;

  border-radius: 3px;
`;

export const ItemTitle = styled.div`
  max-width: 120px;

  text-align: center;
`;

export const RarityInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  text-transform: uppercase;

  margin-top: 5px;

  background: ${({ gradient }) =>
    gradient
      ? `linear-gradient(
    90deg,
    rgba(186, 148, 62, 1) 0%,
    rgba(236, 172, 32, 1) 20%,
    rgba(186, 148, 62, 1) 39%,
    rgba(249, 244, 180, 1) 50%,
    rgba(186, 148, 62, 1) 60%,
    rgba(236, 172, 32, 1) 80%,
    rgba(186, 148, 62, 1) 100%
  )`
      : `linear-gradient(
    90deg,
    rgba(114, 76, 249, 1) 0%,
    rgba(146, 116, 251, 1) 20%,
    rgba(114, 76, 249, 1) 39%,
    rgba(162, 137, 251, 1) 50%,
    rgba(114, 76, 249, 1) 60%,
    rgba(146, 116, 251, 1) 80%,
    rgba(114, 76, 249, 1) 100%
  )`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${backgroundAnimation} 3s ease alternate infinite;
  background-size: 200%;
  background-position: right;
`;

export const ItemFunction = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemQTD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 85px;

  padding-bottom: 15px;

  p {
    font-size: 16px;
    font-weight: 500;
    padding: 0 10px;
  }
`;

export const ButtonQTD = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  cursor: pointer;

  -webkit-appearance: none;

  svg {
    width: 26px;
    height: auto;
  }
`;

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  color: rgb(231, 38, 38);
  font-weight: 600;

  cursor: pointer;

  -webkit-appearance: none;

  svg {
    width: 26px;
    height: auto;
    fill: rgb(231, 38, 38);
  }
`;

export const ItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 70px;

  font-size: 16px;
  font-weight: 500;

  span {
    font-size: 16px;
    font-weight: 700;
    color: #007a43;

    padding-top: 15px;
  }
`;
