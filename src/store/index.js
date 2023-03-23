import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { comicsSlice } from "./comics";

const rootReducer = combineReducers({
  comics: comicsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
