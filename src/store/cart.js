import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    clearState: (state) => {
      state.cart = [];
      state.isLoading = false;

      return state;
    },

    setItem: (state, { payload }) => {
      const currentCart = state.cart;

      const cartIndex = currentCart.findIndex((item) => item.id == payload.id);

      const newItem = JSON.parse(JSON.stringify(payload));
      Object.preventExtensions(newItem);

      if (cartIndex >= 0) {
        currentCart[cartIndex].count += 1;

        state.cart = currentCart;
      } else {
        newItem.count = 1;

        state.cart = [...state.cart, payload];
      }
    },

    removeItem: (state, { payload }) => {
      const currentCart = current(state.cart);

      const newCart = currentCart.filter((item) => item.id != payload.id);

      state.cart = newCart;
    },

    removeItemQTD: (state, { payload }) => {
      const currentCart = current(state.cart);

      const newCart = JSON.parse(JSON.stringify(currentCart));
      Object.preventExtensions(newCart);

      const itemIndex = currentCart.findIndex((item) => item.id === payload.id);

      newCart[itemIndex].count -= 1;

      state.cart = newCart;
    },
  },
});

export const { clearState, setItem, removeItem, removeItemQTD } =
  cartSlice.actions;

export const cartSelector = (state) => state.cart;
