import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    toggle: (state) => !state,
  },
});

export const { toggle } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;