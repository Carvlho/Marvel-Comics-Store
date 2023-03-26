import styled from "styled-components";

export const ContainerHome = styled.div`
  padding: 100px 30px;
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-row-gap: 1rem;
  grid-column-gap: 12px;

  -webkit-box-pack: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 230px);
    grid-gap: 1rem;
  }

  @media screen and (min-width: 426px) {
    grid-template-columns: repeat(2, 180px);
    grid-gap: 1rem;
  }

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 230px);
    grid-gap: 2rem;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 220px);
    grid-gap: 2rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 230px);
    grid-row-gap: 2rem;
    grid-column-gap: 1rem;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(5, 230px);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 250px);
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin-top: 30px;

  h4 {
    font-size: 24px;
    color: #fff;

    padding: 0 15px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: transparent;

    svg {
      width: 30px;

      fill: #fff;
    }
  }
`;
