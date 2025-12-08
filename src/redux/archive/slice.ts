import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArchive } from './operation';
import { ArchiveState } from './types';

const initialState: ArchiveState = {
  items: [],
  status: 'idle',
  error: null,
};

const archiveSlice = createSlice({
  name: 'archive',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArchive.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchArchive.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchArchive.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default archiveSlice.reducer;
