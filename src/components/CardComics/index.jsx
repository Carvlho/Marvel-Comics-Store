import React, { useEffect, useState } from "react";

import { formatter } from "@/utils/formatterMoney";
import { exchangeRates } from "@/utils/exchangeRates";

import {
  CardHeader,
  ContainerCard,
  DescriptionCard,
  FooterCard,
  ImageCard,
  RarityInfo,
  SkeletonLoading,
} from "./styles";

export default function CardComics({ item }) {
  const { id, title, thumbnail, prices, comicType } = item;

  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const handleImageLoaded = () => {
    setIsLoadingImage(false);
  };

  return (
    <ContainerCard isRare={comicType === "raro" ? true : false}>
      <CardHeader>
        {isLoadingImage && <SkeletonLoading />}
        <ImageCard
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={title}
          draggable={false}
          isLoading={isLoadingImage}
          onLoad={() => handleImageLoaded()}
        />
        <DescriptionCard>
          <h4>{title}</h4>
          <RarityInfo gradient={comicType === "raro" ? true : false}>
            {comicType}
          </RarityInfo>
        </DescriptionCard>
      </CardHeader>
      <FooterCard>
        <span>
          {prices[0].price
            ? formatter.format(prices[0].price * exchangeRates.BRL)
            : "Grátis"}
        </span>
        <button>Comprar</button>
      </FooterCard>
    </ContainerCard>
  );
}
