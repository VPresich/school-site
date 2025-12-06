import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuState } from "./types";

const initialState: MenuState = {
  openIndex: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setOpenIndex: (state, action: PayloadAction<number | null>) => {
      state.openIndex = action.payload;
    },
    closeMenu: (state) => {
      state.openIndex = null;
    },
  },
});

export const { setOpenIndex, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
