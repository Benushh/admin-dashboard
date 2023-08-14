import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { colorMode: "white" };

const colorModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    toggleDark(state) {
      state.colorMode = "dark";
    },
    toggleWhite(state) {
      state.colorMode = "white";
    },
  },
});

const store = configureStore({
  reducer: colorModeSlice.reducer,
});

export const colorModeActions = colorModeSlice.actions;
export default store;
