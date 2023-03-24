import styled from "styled-components";
import { FadeInAnimation } from "../ModalCart/styles";

export const ContainerCartSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${FadeInAnimation} 1.5s both;

  width: 100%;
  height: 100%;

  text-align: center;

  padding: 0 30px;

  svg {
    fill: #007a43;

    width: 120px;

    margin-bottom: 30px;
  }

  h3 {
    font-size: 1.5rem;
    color: #42464d;
    margin-bottom: 5px;
  }

  h6 {
    font-size: 0.875rem;
    color: #565c69;

    margin-bottom: 30px;
  }

  button {
    display: flex;
    align-items: center;

    font-size: 18px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;

    padding: 8px 15px;

    border: 1px solid #007a43;
    border-radius: 0.25rem;
    background-color: #007a43;

    cursor: pointer;

    svg {
      width: 22px;
      fill: #fff;

      margin-bottom: 0;
      margin-right: 12px;
    }
  }

  @media screen and (max-width: 425px) {
    h3 {
      font-size: 1rem;
    }

    button {
      font-size: 14px;

      svg {
        width: 26px;
      }
    }
  }
`;
