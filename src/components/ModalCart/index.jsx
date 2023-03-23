import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as IconLeft } from "@/assets/svg/IconLeft.svg";
import { ReactComponent as IconRight } from "@/assets/svg/IconRight.svg";
import { ReactComponent as IconDelete } from "@/assets/svg/IconDelete.svg";
import { ReactComponent as IconClose } from "@/assets/svg/IconClose.svg";

import { formatter } from "@/utils/formatterMoney";
import { exchangeRates } from "@/utils/exchangeRates";

import { cartSelector, removeItem, removeItemQTD, setItem } from "@/store/cart";

import {
  ButtonClose,
  ButtonDelete,
  ButtonQTD,
  ContainerItems,
  Item,
  ItemFunction,
  ItemImage,
  ItemPrice,
  ItemQTD,
  ItemTitle,
  ModalContainer,
  ModalHeader,
  ModalHeaderContent,
  ModalOverlay,
  ModalView,
  RarityInfo,
} from "./styles";

export default function ModalCart({ isOpen, close }) {
  const dispatch = useDispatch();

  const { cart } = useSelector(cartSelector);

  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const handleImageLoaded = () => {
    setIsLoadingImage(false);
  };

  const handleDeleteItem = (item) => {
    dispatch(removeItem(item));
  };

  const removeQTDItem = (item) => {
    dispatch(removeItemQTD(item));
  };

  const addQTDItem = (item) => {
    dispatch(setItem(item));
  };

  const handlePriceItem = (price) => {
    const newPrice = formatter.format(price * exchangeRates.BRL);

    return newPrice;
  };

  const handleItemsCart = () => {
    const items = cart.map((item) => item.count);

    const initialValue = 0;

    const sum = items.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    return sum;
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalOverlay>
        <ModalView isOpen={isOpen}>
          <ModalHeader>
            <ModalHeaderContent>
              <h4>Carrinho ({handleItemsCart()})</h4>
              <ButtonClose onClick={close}>
                <IconClose />
              </ButtonClose>
            </ModalHeaderContent>
          </ModalHeader>
          <ContainerItems>
            {cart.length > 0
              ? cart.map((item) => {
                  return (
                    <Item key={item.id}>
                      <ItemImage
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                        alt={item.title}
                        draggable={false}
                        isLoading={isLoadingImage}
                        onLoad={() => handleImageLoaded()}
                      />
                      <ItemTitle>
                        <h4>{item.title}</h4>
                        <RarityInfo
                          gradient={item.comicType === "raro" ? true : false}
                        >
                          {item.comicType}
                        </RarityInfo>
                      </ItemTitle>
                      <ItemFunction>
                        <ItemQTD>
                          {item.count > 1 ? (
                            <ButtonQTD onClick={() => removeQTDItem(item)}>
                              <IconLeft />
                            </ButtonQTD>
                          ) : null}
                          <p>{item.count}</p>
                          {item.count <= 9 ? (
                            <ButtonQTD onClick={() => addQTDItem(item)}>
                              <IconRight />
                            </ButtonQTD>
                          ) : null}
                        </ItemQTD>
                        <ButtonDelete onClick={() => handleDeleteItem(item)}>
                          <IconDelete /> Deletar Item
                        </ButtonDelete>
                      </ItemFunction>
                      <ItemPrice>
                        Preço:
                        <span>
                          {item.prices[0].price
                            ? handlePriceItem(item.prices[0].price * item.count)
                            : "Grátis"}
                        </span>
                      </ItemPrice>
                    </Item>
                  );
                })
              : null}
          </ContainerItems>
        </ModalView>
      </ModalOverlay>
    </ModalContainer>
  );
}
