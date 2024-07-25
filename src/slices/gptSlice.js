import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    show: false,
  },
  reducers: {
    showGptPage: (state, action) => {
      state.show = !state.show;
    },
  },
});
export const { showGptPage } = gptSlice.actions;
export default gptSlice.reducer;
