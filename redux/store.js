import { configureStore } from "@reduxjs/toolkit";

import cryptosReducer from "./crypto/cryptoSlice";
import cryptosNewsReducer from './crypto/cryptoNewsSlice'

const store = configureStore({
  reducer: {
    cryptos: cryptosReducer,
    cryptosNews: cryptosNewsReducer
  },
});

export default store
