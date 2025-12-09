import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeDocument, HomeState } from './types';
import { fetchHome } from './operations';

const initialState: HomeState = {
  page: undefined,
  loading: false,
  error: undefined,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    clearHome(state) {
      state.page = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchHome.pending, state => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchHome.fulfilled,
      (state, action: PayloadAction<HomeDocument>) => {
        state.loading = false;
        state.page = action.payload;
      }
    );
    builder.addCase(fetchHome.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { clearHome } = homeSlice.actions;
export default homeSlice.reducer;
