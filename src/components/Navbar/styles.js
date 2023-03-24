import styled from "styled-components";

export const ContainerNavbar = styled.nav`
  position: fixed;

  width: 100%;

  background-color: #000000;

  z-index: 2;
`;

export const ContentNavbar = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 30px;
  margin: 0 auto;
`;

export const Logo = styled.picture`
  img {
    max-height: 50px;
  }
`;

export const ButtonCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 50px;

  > svg {
    max-height: 30px;

    cursor: pointer;

    :hover {
      fill: #724cf9;
    }
  }

  .numberItems {
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(25%, -50%);
    transform-origin: 100% 0%;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 20px;

    font-size: 12px;
    color: #fff;

    border-radius: 50%;
    padding: 0 6px;

    background-color: #724cf9;
  }
`;
