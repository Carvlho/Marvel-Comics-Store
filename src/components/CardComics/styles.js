import styled, { keyframes } from "styled-components";

const backgroundAnimation = keyframes`
    to{background-position: right}
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;

  padding: 15px;

  border-radius: 12px;
`;

export const ImageCard = styled.img`
  width: 100%;

  border-radius: 12px;
`;

export const DescriptionCard = styled.div`
  margin-top: 15px;
`;

export const RarityInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

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
  animation: ${backgroundAnimation} 3s ease infinite;
  background-size: 200%;
  background-position: left;
`;

export const FooterCard = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 5px;

  span {
    font-size: 16px;
    font-weight: 700;
    color: #007a43;
  }

  button {
    font-size: 16px;
    font-weight: 600;
    color: #242325;

    cursor: pointer;

    border: none;
    background: transparent;
  }
`;
