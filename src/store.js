import { configureStore } from "@reduxjs/toolkit";
import streamifyReducer from "./features/streamifySlice";

const store = configureStore({
    reducer: {
        streamify: streamifyReducer,
    }
})

export default store;