
import { createSlice } from "@reduxjs/toolkit";

const assetSlice = createSlice({
  name: "asset",
  initialState: {
    data: []
  },
  reducers: {
    setInitialAssets: (state, action) => {
      state.data = action.payload;
    },
    updateLiveAsset: (state, action) => {
      const { symbol, price, change24h, volume24h } = action.payload;
      const index = state.data.findIndex(asset => asset.symbol === symbol);
      if (index !== -1) {
        state.data[index].price = price;
        state.data[index].change24h = change24h;
        state.data[index].volume24h = volume24h;
      }
    }
  }
});

export const { updateLiveAsset, setInitialAssets } = assetSlice.actions;
export default assetSlice.reducer;
