import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as IconLeft } from "@/assets/svg/IconLeft.svg";
import { ReactComponent as IconRight } from "@/assets/svg/IconRight.svg";
import { ReactComponent as IconDelete } from "@/assets/svg/IconDelete.svg";
import { ReactComponent as IconClose } from "@/assets/svg/IconClose.svg";
import { ReactComponent as IconInfo } from "@/assets/svg/IconInfo.svg";

import { formatter } from "@/utils/formatterMoney";
import { exchangeRates } from "@/utils/exchangeRates";
import cupounValidate from "@/utils/cupounValidate";

import EmptyCart from "../EmptyCart";
import CartSuccess from "../CartSuccess";

import {
  cartSelector,
  clearState,
  removeItem,
  removeItemQTD,
  setItem,
} from "@/store/cart";

import {
  ButtonClose,
  ButtonDelete,
  ButtonQTD,
  ContainerContentModal,
  ContainerItems,
  Info,
  Item,
  ItemFunction,
  ItemImage,
  ItemPrice,
  ItemQTD,
  ItemTitle,
  ModalContainer,
  ModalFooter,
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

  const [usedCoupons, setUsedCoupons] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [couponError, setCouponError] = useState("");

  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    if (cart.length < 1) {
      setUsedCoupons([]);
    }
  }, [cart]);

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

  const handleTotal = () => {
    const items = cart;

    const initialValue = 0;

    const sum = items.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.prices[0].price * currentValue.count,
      initialValue
    );

    return sum;
  };

  const handleValidateCoupon = (coupon) => {
    setCouponError("");

    const res = cupounValidate(usedCoupons, coupon);

    if (typeof res != "object") {
      setCouponError(res);

      setTimeout(() => {
        setCouponError("");
      }, [1000]);

      return res;
    }

    setUsedCoupons([...usedCoupons, res]);
  };

  const handleDiscount = () => {
    const items = cart;

    const initialValue = 0;

    const discount = items.reduce((accumulator, comic) => {
      const rareDiscount = usedCoupons.find((item) => item.type === "raro");
      const comumDiscount = usedCoupons.find((item) => item.type === "comum");

      if (rareDiscount && comic.comicType === "raro") {
        const calcTotal = comic.prices[0].price * comic.count;

        const calcDiscount = calcTotal * (rareDiscount.discount / 100);

        return accumulator + calcDiscount;
      }

      if (comumDiscount && comic.comicType === "comum") {
        const calcTotal = comic.prices[0].price * comic.count;
        const calcDiscount = calcTotal * (comumDiscount.discount / 100);

        return accumulator + calcDiscount;
      }

      return accumulator + 0;
    }, initialValue);

    return discount;
  };

  const handleCheckout = () => {
    setCheckoutSuccess(true);
  };

  const handleBackHome = () => {
    close();

    setTimeout(() => {
      setCheckoutSuccess(false);
      dispatch(clearState());
    }, [500]);
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalOverlay
        id="modalOverlay"
        onClick={(e) => (e.target.id === "modalOverlay" ? close() : null)}
      >
        <ModalView isOpen={isOpen}>
          <ModalHeader>
            <ModalHeaderContent>
              <h4>Carrinho ({handleItemsCart()})</h4>
              <ButtonClose onClick={close}>
                <IconClose />
              </ButtonClose>
            </ModalHeaderContent>
          </ModalHeader>
          <ContainerContentModal>
            {cart.length > 0 ? (
              checkoutSuccess ? (
                <CartSuccess
                  isVisible={checkoutSuccess}
                  close={handleBackHome}
                />
              ) : (
                <>
                  <ContainerItems isVisible={checkoutSuccess}>
                    <Info>
                      <IconInfo />
                      Máximo de 10 itens por quadrinho
                    </Info>
                    {cart.map((item) => {
                      return (
                        <Item key={item.id}>
                          <ItemImage
                            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                            alt={item.title}
                            draggable={false}
                            isLoading={isLoadingImage}
                            onLoad={() => handleImageLoaded()}
                          />
                          <div className="item-description">
                            <ItemTitle>
                              <h4>{item.title}</h4>
                              <RarityInfo
                                gradient={
                                  item.comicType === "raro" ? true : false
                                }
                              >
                                {item.comicType}
                              </RarityInfo>
                            </ItemTitle>
                            <ItemFunction>
                              <ItemQTD>
                                {item.count > 1 ? (
                                  <ButtonQTD
                                    onClick={() => removeQTDItem(item)}
                                  >
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
                              <ButtonDelete
                                onClick={() => handleDeleteItem(item)}
                              >
                                <IconDelete /> Deletar Item
                              </ButtonDelete>
                            </ItemFunction>
                            <ItemPrice>
                              Preço:
                              <span>
                                {item.prices[0].price
                                  ? handlePriceItem(
                                      item.prices[0].price * item.count
                                    )
                                  : "Grátis"}
                              </span>
                            </ItemPrice>
                          </div>
                        </Item>
                      );
                    })}
                  </ContainerItems>
                  <ModalFooter>
                    {usedCoupons.length > 0 ? (
                      <div className="content-coupons">
                        {usedCoupons.map((item, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              setUsedCoupons(
                                usedCoupons.filter(
                                  (coupon) => coupon.name != item.name
                                )
                              )
                            }
                          >
                            <p>{item.name}</p>
                            <IconClose />
                          </button>
                        ))}
                      </div>
                    ) : null}
                    <form
                      className="form-coupon"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="input-group">
                        <input
                          placeholder="Código de Cupom"
                          value={coupon}
                          onChange={(e) => setCoupon(e.target.value)}
                        />
                        <button
                          onClick={() => {
                            handleValidateCoupon(coupon), setCoupon("");
                          }}
                        >
                          Aplicar
                        </button>
                      </div>

                      {couponError && (
                        <div className="error-input">
                          <p>*{couponError}</p>
                        </div>
                      )}
                    </form>

                    <div className="subtotal">
                      <div>
                        <h5>Preço:</h5>
                        <h6>
                          {formatter.format(handleTotal() * exchangeRates.BRL)}
                        </h6>
                      </div>
                      <div>
                        <h5>Desconto:</h5>
                        <h6>
                          {usedCoupons.length > 0
                            ? formatter.format(
                                handleDiscount() * exchangeRates.BRL
                              )
                            : "R$ 00,00"}
                        </h6>
                      </div>
                      <div className="finalPrice">
                        <h4>Preço Final:</h4>
                        <h3>
                          {formatter.format(
                            (handleTotal() - handleDiscount()) *
                              exchangeRates.BRL
                          )}
                        </h3>
                      </div>
                    </div>

                    <button className="btn-purchase" onClick={handleCheckout}>
                      Finalizar compra
                    </button>
                  </ModalFooter>
                </>
              )
            ) : (
              <EmptyCart close={close} />
            )}
          </ContainerContentModal>
        </ModalView>
      </ModalOverlay>
    </ModalContainer>
  );
}
