import styled from "styled-components";

export const ContainerHome = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 150px);
  -webkit-box-pack: center;
  justify-content: center;
  gap: 15px;

  padding: 100px 30px;

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 230px);
    grid-gap: 2rem;
  }

  @media screen and (min-width: 428px) {
    grid-template-columns: repeat(1, 250px);
    grid-gap: 2rem;
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
    grid-gap: 2rem;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 250px);

    grid-column: 1 / 5;
  }
`;
