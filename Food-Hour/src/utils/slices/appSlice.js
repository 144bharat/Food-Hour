import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showLoading: true,
  },
  reducers: {
    hideLoading: (state) => {
      state.showLoading = false;
    },
  },
});

export const { hideLoading } = appSlice.actions;

export default appSlice.reducer;