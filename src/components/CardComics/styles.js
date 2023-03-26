import styled, { css, keyframes } from "styled-components";

const backgroundAnimation = keyframes`
  100% {
    background-position: left;
  }
`;

const scaleAnimation = keyframes`
  100% {
    transform: scale(1.05);
  }
`;

const skeletonAnimation = keyframes`
  100% {
    background-position-x: -200%;
  }
`;

const borderAnimated = keyframes` 
	0% {
		background-position: 100% 50%;
	}
	50% {
		background-position: 50% 0%;
	}
	100% {
		background-position: 50% 0%;
	}
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: auto;

  background-color: #fff;

  padding: 15px;

  border-radius: 12px;

  position: relative;

  :after {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    height: calc(100% + 6px);
    width: calc(100% + 6px);
    background: ${({ isRare }) =>
      isRare
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
    border-radius: 12px;
    z-index: -1;
    animation: ${borderAnimated} 3s ease alternate infinite;
    background-size: 300% 300%;
  }
`;

export const SkeletonLoading = styled.div`
  width: 100%;
  height: auto;
  min-height: 280px;

  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s ${skeletonAnimation} linear infinite;
`;

export const CardHeader = styled.div`
  cursor: pointer;

  :hover img {
    transition: all 0.17s ease-in-out;
    transform: translate3d(0, -10px, 0);
  }
`;

export const ImageCard = styled.img`
  display: ${({ isLoading }) => (isLoading ? "none" : "block")};

  position: relative;

  width: 100%;
  object-fit: contain;

  border-radius: 3px;
`;

export const DescriptionCard = styled.div`
  margin-top: 15px;

  h4 {
    text-overflow: ellipsis;
    overflow: hidden;
    min-height: 50px;
    max-height: 50px;
  }
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
  animation: ${backgroundAnimation} 3s ease alternate infinite;
  background-size: 200%;
  background-position: right;
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
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    font-weight: 600;
    color: #242325;

    border: 1px solid #242325;
    border-radius: 8px;

    background-color: transparent;

    padding: 5px 8px;

    cursor: pointer;

    :hover {
      animation: ${scaleAnimation} 0.5s ease-out forwards;
    }
  }

  @media screen and (max-width: 768px) {
    span,
    button {
      font-size: 14px;
    }
  }
`;
