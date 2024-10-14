import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      const htmlElement = document.querySelector("html");
      htmlElement.classList.toggle("dark", state.isDarkMode);
      htmlElement.classList.toggle("light", !state.isDarkMode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
