import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AboutDocument, AboutState } from './types';
import { fetchAbout } from './operations';

const initialState: AboutState = {
  schoolInfo: undefined,
  loading: false,
  error: undefined,
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    clearAbout(state) {
      state.schoolInfo = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAbout.pending, state => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchAbout.fulfilled,
      (state, action: PayloadAction<AboutDocument>) => {
        state.loading = false;
        state.schoolInfo = action.payload;
      }
    );
    builder.addCase(fetchAbout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { clearAbout } = aboutSlice.actions;
export default aboutSlice.reducer;
