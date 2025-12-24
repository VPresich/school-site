import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MediaDocument, MediaState } from './types';
import { fetchMedia } from './operations';

const initialState: MediaState = {
  page: undefined,
  loading: false,
  error: undefined,
};

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    clearAbout(state) {
      state.page = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMedia.pending, state => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchMedia.fulfilled,
      (state, action: PayloadAction<MediaDocument>) => {
        state.loading = false;
        state.page = action.payload;
      }
    );
    builder.addCase(fetchMedia.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { clearAbout } = mediaSlice.actions;
export default mediaSlice.reducer;
