import React from "react";

import {
  ContainerCard,
  DescriptionCard,
  FooterCard,
  ImageCard,
  RarityInfo,
} from "./styles";

export default function CardComics() {
  var comicType = "comum";

  return (
    <ContainerCard>
      <ImageCard src="https://lumiere-a.akamaihd.net/v1/images/image_30d95723.jpeg" />
      <DescriptionCard>
        <h4>The Mandalorian</h4>
        <RarityInfo gradient={comicType === "raro" ? true : false}>
          {comicType}
        </RarityInfo>
        <FooterCard>
          <span>3.99$</span>
          <button>Comprar</button>
        </FooterCard>
      </DescriptionCard>
    </ContainerCard>
  );
}
