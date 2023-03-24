import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { formatter } from "@/utils/formatterMoney";
import { exchangeRates } from "@/utils/exchangeRates";

import { setItem } from "@/store/cart";

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
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id, title, thumbnail, prices, comicType } = item;

  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const handleImageLoaded = () => {
    setIsLoadingImage(false);
  };

  const handleAddComic = (item) => {
    dispatch(setItem(item));
  };

  return (
    <ContainerCard isRare={comicType === "raro" ? true : false}>
      <CardHeader onClick={() => navigate("/comic/" + id)}>
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
        <button onClick={() => handleAddComic(item)}>Comprar</button>
      </FooterCard>
    </ContainerCard>
  );
}
