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

  @media screen and (max-width: 768px) {
    width: 65vw;
  }

  @media screen and (max-width: 520px) {
    width: 100vw;
  }
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

  @media screen and (max-width: 280px) {
    padding: 0 15px;
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

export const FadeInAnimation = keyframes`
    0% {
        opacity: 0;
        top: 40px;
    }

    100% {
        opacity: 1;
        top: 0px;
    }
`;

export const ContainerContentModal = styled.div`
  width: 100%;
  height: 100%;

  animation: ${FadeInAnimation} 0.5s both;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;

  opacity: ${({ isVisible }) => (isVisible ? "0" : "1")};
  transition: opacity 0.5s ease-in-out;

  max-height: 60vh;

  padding: 20px 30px 80px;

  overflow-y: auto;

  @media screen and (max-width: 280px) {
    padding: 20px 15px 60px;

    max-height: 45vh;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  color: rgb(231, 38, 38);

  svg {
    width: 20px;
    fill: rgb(231, 38, 38);

    margin-right: 10px;
  }

  @media screen and (max-width: 425px) {
    font-size: 12px;

    svg {
      width: 16px;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  .item-description {
    display: grid;
    grid-template-columns: repeat(2, 4fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;

    padding-left: 12px;
  }
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
  text-align: center;

  grid-area: 1 / 1 / 2 / 6;

  @media screen and (max-width: 425px) {
    h4,
    div {
      font-size: 14px;
    }
  }
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
  align-items: center;
  justify-content: center;

  grid-area: 2 / 1 / 3 / 2;
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

  @media screen and (max-width: 425px) {
    p,
    div {
      font-size: 14px;
    }
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

  @media screen and (max-width: 425px) {
    svg {
      width: 22px;
    }
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

  @media screen and (max-width: 425px) {
    font-size: 12px;

    svg {
      width: 22px;
    }
  }
`;

export const ItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  font-size: 16px;
  font-weight: 500;

  grid-area: 2 / 2 / 3 / 3;

  span {
    font-size: 16px;
    font-weight: 700;
    color: #007a43;

    padding-top: 15px;
  }

  @media screen and (max-width: 425px) {
    justify-content: flex-start;

    font-size: 14px;

    span {
      font-size: 12px;
    }
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ModalFooter = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;

  padding: 30px;

  background-color: #fff;

  -webkit-box-shadow: 0px -8px 10px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px -8px 10px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px -8px 10px 0px rgba(0, 0, 0, 0.4);

  .subtotal {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
    }

    h5,
    h6 {
      font-size: 16px;
      color: #5c5c5c;
    }

    .finalPrice {
      h4 {
        font-size: 20px;
        color: #000;
      }
      h3 {
        font-size: 20px;
        font-weight: 700;
        color: #007a43;
      }
    }
  }

  .content-coupons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    padding-bottom: 10px;

    button {
      display: flex;
      align-items: center;

      padding: 5px 8px;
      border-radius: 12px;

      background-color: #633af8;

      border: none;

      cursor: pointer;

      p {
        font-size: 16px;
        font-weight: 600;
        color: #fff;

        text-transform: uppercase;
      }

      svg {
        width: 16px;
        fill: #fff;

        margin-left: 5px;
      }
    }
  }

  .form-coupon {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 100%;

    padding-bottom: 15px;

    .input-group {
      display: flex;

      width: 100%;

      border: 1px solid #000;
      border-radius: 12px;

      input {
        width: 100%;

        padding: 8px 10px;

        text-transform: uppercase;

        outline: none;
        border: none;
        background-color: transparent;

        -webkit-appearance: none;

        :focus-visible {
          border: none;
        }
      }

      button {
        padding: 8px 10px;

        font-size: 16px;
        font-weight: 600;

        border: none;
        background-color: transparent;

        cursor: pointer;
      }
    }

    .error-input {
      font-size: 14px;
      font-weight: 500;
      color: rgb(231, 38, 38);

      text-align: left;

      margin-top: 5px;

      animation: ${fadeOutAnimation} 1s ease-in;
    }
  }

  .btn-purchase {
    width: 100%;

    font-size: 18px;
    font-weight: bold;

    padding: 10px 12px;
    margin-top: 12px;

    border: 1px solid #242325;
    border-radius: 12px;
    background-color: transparent;

    cursor: pointer;
  }

  @media screen and (max-width: 280px) {
    padding: 15px;
  }
`;
