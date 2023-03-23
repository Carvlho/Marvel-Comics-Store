import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { comicsSlice } from "./comics";
import { cartSlice } from "./cart";

const rootReducer = combineReducers({
  comics: comicsSlice.reducer,
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
