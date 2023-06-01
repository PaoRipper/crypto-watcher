import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const cryptosOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd047877ca9msh8ccf0e55e3063dap16160fjsn1de1c76e392e',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

export const getCryptos = createAsyncThunk(
  "/cryptos/getCryptos",
  async (params) => {
    const { count, search } = params;
    return await fetch(
      `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${count ? count : 50}&offset=0${search.length > 0 ? `&search=${search}` : ""
      }`,
      cryptosOptions
    ).then((res) => {
      return res.json()
    });
  }
);

const CRYPTOS_INITIAL_STATE = {
  cryptos: [],
  loading: false,
};

const cryptosSlice = createSlice({
  name: "cryptos",
  initialState: CRYPTOS_INITIAL_STATE,
  reducers: {
    searchCrypto: (state, action) => { },
    showCryptos: (state, action) => {
      console.log(state.cryptos);
    },
  },
  extraReducers: {
    [getCryptos.pending]: (state, action) => {
      state.loading = true;
    },
    [getCryptos.fulfilled]: (state, action) => {
      (state.loading = false), (state.cryptos = action.payload);
      console.log(action.payload);
    },
    [getCryptos.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const cryptoAction = cryptosSlice.actions;

export default cryptosSlice.reducer;
