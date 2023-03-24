import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { generateTimeStamp, md5Hash } from "@/utils/hashGenerator";
import api from "./api";
import generateRareComics from "../utils/generateRareComics";

let timeStamp = generateTimeStamp();
let hashMD5 = md5Hash(
  timeStamp,
  import.meta.env.VITE_API_PRIVATE_KEY,
  import.meta.env.VITE_API_PUBLIC_KEY
);

export const getComics = createAsyncThunk("comics/get", async () => {
  try {
    const response = await api.get(
      `comics?orderBy=onsaleDate&dateDescriptor=thisMonth&limit=100&ts=${timeStamp}&apikey=${
        import.meta.env.VITE_API_PUBLIC_KEY
      }&hash=${hashMD5}`
    );

    const { data } = response.data;

    const { count, results } = data;

    const comics = generateRareComics(results, count);

    return comics;
  } catch (error) {
    console.log(error);

    return error.response.data;
  }
});

const initialState = {
  comics: [],
  page: 1,
  isError: null,
  isLoading: false,
  errorMessage: null,
};

export const comicsSlice = createSlice({
  name: "comics",
  initialState: initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.errorMessage = null;

      return state;
    },

    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getComics.fulfilled, (state, { payload }) => {
      state.comics = payload;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;

      return state;
    });
    builder.addCase(getComics.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getComics.rejected, (state, payload) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { clearState, setPage } = comicsSlice.actions;

export const comicsSelector = (state) => state.comics;
