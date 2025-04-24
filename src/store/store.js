
import { configureStore } from "@reduxjs/toolkit";
import assetReducer from "../redux/assetSlice.js";

const store = configureStore({
  reducer: {
    asset: assetReducer
  }
});

export default store;
