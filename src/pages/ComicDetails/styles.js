import styled, { keyframes } from "styled-components";

const backgroundAnimation = keyframes`
  100% {
    background-position: left;
  }
`;

export const ContainerComicDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1440px;

  margin: 0 auto;
  padding: 130px 30px;

  @media screen and (max-width: 320px) {
    padding: 130px 15px;
  }
`;

export const Comic = styled.div`
  display: flex;
  align-items: flex-start;

  color: #fafafa;

  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

export const ImageComic = styled.img`
  max-width: 320px;

  @media screen and (max-width: 320px) {
    max-width: 280px;
  }

  @media screen and (max-width: 280px) {
    max-width: 240px;
  }
`;

export const DetailsComic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin: auto;
  padding-left: 30px;

  @media screen and (max-width: 540px) {
    padding: 20px 0 0;
  }
`;

export const DetailsComicHeader = styled.div``;

export const RarityInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;

  margin-top: 30px;

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

export const DescriptionComic = styled.div`
  margin-top: 30px;

  font-weight: 500;

  h4 {
    margin-bottom: 10px;
  }
`;

export const Creators = styled.div`
  margin-top: 30px;

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    column-gap: 1rem;
    row-gap: 8px;

    margin-top: 10px;

    p {
      font-size: 14px;
    }
  }
`;

export const Price = styled.div`
  margin-top: 30px;

  font-size: 26px;
  font-weight: 700;
  color: #007a43;
`;

export const BuyBTN = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  font-size: 16px;
  font-weight: 600;
  color: #fff;

  border: 1px solid #fff;
  border-radius: 8px;

  background-color: transparent;

  margin-top: 20px;
  padding: 5px 8px;

  cursor: pointer;
`;
