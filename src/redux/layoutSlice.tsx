import { createSlice } from "@reduxjs/toolkit";

const initialState = { footer: true };

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    showFooter(state) {
      state.footer = true;
    },
    hideFooter(state) {
      state.footer = false;
    },
  },
});

export const { showFooter, hideFooter } = layoutSlice.actions;
export default layoutSlice.reducer;