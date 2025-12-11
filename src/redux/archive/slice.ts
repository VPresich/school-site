import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArchive, fetchArchivePage } from './operation';
import { ArchiveState } from './types';

const initialState: ArchiveState = {
  items: [],
  status: 'idle',
  error: null,
  page: 1,
  limit: 10,
  total: 0,
  totalPages: 0,
};

const archiveSlice = createSlice({
  name: 'archive',
  initialState,
  reducers: {
    clearArchive(state) {
      state.items = [];
    },
    setActivePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
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
      })
      .addCase(fetchArchivePage.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchArchivePage.fulfilled, (state, action) => {
        state.status = 'succeeded';

        state.items = action.payload.items;
        state.total = action.payload.total;
        state.totalPages = action.payload.totalPages;

        state.error = null;
      })
      .addCase(fetchArchivePage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Помилка';
      });
  },
});
export const { clearArchive, setActivePage } = archiveSlice.actions;

export default archiveSlice.reducer;
