import { configureStore } from "@reduxjs/toolkit";
import streamifyReducer from "./features/streamifySlice";

const store = configureStore({
    reducer: {
        data: streamifyReducer,
    }
})

export default store;