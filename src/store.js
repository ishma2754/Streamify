import { configureStore } from "@reduxjs/toolkit";
import streamifyReducer from "./features/streamifySlice";
import themeReducer from "./features/themeSlice";

const store = configureStore({
  reducer: {
    streamify: streamifyReducer,
    theme: themeReducer,
  },
});

export default store;
