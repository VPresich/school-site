import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuState } from './types';

const initialState: MenuState = {
  openIndex: 0,
  isSidebarOpen: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setOpenIndex: (state, action: PayloadAction<number | null>) => {
      state.openIndex = action.payload;
    },

    openSidebar: state => {
      if (state.openIndex !== null) state.isSidebarOpen = true;
    },
    closeSidebar: state => {
      state.isSidebarOpen = false;
    },
  },
});

export const { setOpenIndex, openSidebar, closeSidebar } = menuSlice.actions;
export default menuSlice.reducer;
