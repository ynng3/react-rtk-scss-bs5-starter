import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./store/menuSlice";
import hamburgerReducer from "./store/hamburgerSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    hamburger: hamburgerReducer,
  },
});

export default store;
