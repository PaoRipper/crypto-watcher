import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const cryptosNewsOptions = {
  method: "GET",
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_CRYPTO_API_KEY,
  },
};

export const getCryptosNews = createAsyncThunk(
  "/cryptosNew/getCryptosNews",
  async (count) => {
    return await fetch(
      `https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&count=${count}&freshness=Day&textFormat=Raw&safeSearch=Off`,
      cryptosNewsOptions
    ).then((res) => res.json());
  }
);

const CRYPTOS_NEWS_INITIAL_STATE = {
  cryptosNews: [],
  loading: false,
};

const cryptosNewsSlice = createSlice({
  name: "cryptosNews",
  initialState: CRYPTOS_NEWS_INITIAL_STATE,
//   reducers: {
//     showCryptosNews: (state, action) => {
//       console.log(state.cryptosNews);
//     },
//   },
  extraReducers: {
    [getCryptosNews.pending]: (state, action) => {
      state.loading = true;
    },
    [getCryptosNews.fulfilled]: (state, action) => {
      (state.loading = false), (state.cryptosNews = action.payload);
    },
    [getCryptosNews.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const cryptoNewsAction = cryptosNewsSlice.actions;

export default cryptosNewsSlice.reducer;
