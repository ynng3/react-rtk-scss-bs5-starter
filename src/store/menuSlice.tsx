import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    text: "1차 메뉴",
    href: "/0",
  },
  {
    id: 1,
    text: "1차 메뉴",
    href: "/1",
    items: [
      {
        id: 11,
        text: "2차 메뉴",
        href: "/1-1",
      },
    ],
  },
];

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
