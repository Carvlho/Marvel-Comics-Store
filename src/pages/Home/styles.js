import styled from "styled-components";

export const ContainerHome = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 150px);
  -webkit-box-pack: center;
  justify-content: center;
  gap: 15px;

  padding-top: 100px;

  @media screen and (min-width: 768px) {
    grid-column: 1 / 4;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 200px);
    grid-gap: 25px;

    grid-column: 1 / 4;
  }

  @media screen and (min-width: 1366px) {
    grid-template-columns: repeat(4, 200px);

    grid-column: 1 / 5;
  }
`;
