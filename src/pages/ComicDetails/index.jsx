import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { comicsSelector } from "@/store/comics";
import { setItem } from "@/store/cart";

import { formatter } from "@/utils/formatterMoney";
import { exchangeRates } from "@/utils/exchangeRates";

import Loading from "@/components/Loading";
import { SkeletonLoading } from "@/components/CardComics/styles";

import {
  BuyBTN,
  Comic,
  ContainerComicDetails,
  Creators,
  DescriptionComic,
  DetailsComic,
  DetailsComicHeader,
  ImageComic,
  Price,
  RarityInfo,
} from "./styles";

export default function ComicDetails() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { comics, isLoading } = useSelector(comicsSelector);

  const comic = comics.find((item) => item.id == id);

  const [newComic, setNewComic] = useState(comic);

  useEffect(() => {
    if (comic != undefined) {
      setNewComic(comic);
    }
  }, [comic]);

  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const handleImageLoaded = () => {
    setIsLoadingImage(false);
  };

  const handleAddComic = (item) => {
    dispatch(setItem(item));
  };

  return isLoading ? (
    <Loading />
  ) : newComic != undefined ? (
    <ContainerComicDetails>
      <Comic>
        {isLoadingImage && <SkeletonLoading />}
        <ImageComic
          src={`${newComic.thumbnail.path}.${newComic.thumbnail.extension}`}
          alt={newComic.title}
          draggable={false}
          isLoading={isLoadingImage}
          onLoad={() => handleImageLoaded()}
        />

        <DetailsComic>
          <DetailsComicHeader>
            <h2>{newComic.title}</h2>
          </DetailsComicHeader>
          <RarityInfo gradient={newComic.comicType === "raro" ? true : false}>
            {newComic.comicType}
          </RarityInfo>

          <DescriptionComic>
            <h4>Descrição</h4>
            {newComic.description ? newComic.description : "Indisponível"}
          </DescriptionComic>

          <Creators>
            <h4>Criadores</h4>
            <div>
              {newComic.creators.items.map((item) => (
                <p key={item.name}>
                  {item.name} ({item.role})
                </p>
              ))}
            </div>
          </Creators>

          <Price>
            {newComic.prices[0].price
              ? formatter.format(newComic.prices[0].price * exchangeRates.BRL)
              : "Grátis"}
          </Price>

          <BuyBTN onClick={() => handleAddComic(newComic)}>Comprar</BuyBTN>
        </DetailsComic>
      </Comic>
    </ContainerComicDetails>
  ) : null;
}
