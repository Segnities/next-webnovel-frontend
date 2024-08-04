import type { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  themeColor: "light" | "dark";
}

const initialState: ThemeState = {
  themeColor: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toLightTheme: (state) => {
      state.themeColor = "light";
    },
    toDarkTheme: (state) => {
      state.themeColor = "dark";
    },
    toggleTheme: (state) => {
      if (state.themeColor === "dark") {
        state.themeColor = "light";
      } else if (state.themeColor === "light") {
        state.themeColor = "dark";
      }
    },
  },
});

export const { toDarkTheme, toLightTheme, toggleTheme } = themeSlice.actions;
export const themeColor = (state: RootState) => state.theme.themeColor;
export default themeSlice.reducer;
