import styled from "styled-components";

export const ContainerNavbar = styled.nav`
  position: fixed;

  width: 100%;

  background-color: #000000;
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

  > svg {
    max-height: 30px;

    cursor: pointer;

    :hover {
      fill: #724cf9;
    }
  }
`;

export const Logo = styled.picture`
  img {
    max-height: 60px;
  }
`;
