import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchArchive,
  fetchArchivePage,
  fetchArchiveFiltered,
  fetchArchiveById,
} from './operations';
import { ArchiveState, Status } from './types';

const initialState: ArchiveState = {
  items: [],
  status: Status.Idle,
  error: null,
  page: 1,
  limit: 10,
  total: 0,
  totalPages: 0,
  currentItem: null,
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
    clearCurrentItem(state) {
      state.currentItem = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArchive.pending, state => {
        state.status = Status.Loading;
        state.error = null;
      })
      .addCase(fetchArchive.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchArchive.rejected, (state, action) => {
        state.status = Status.Failed;
        state.error = action.payload;
      })

      // -------------------------------------------------------------
      .addCase(fetchArchivePage.pending, state => {
        state.status = Status.Loading;
        state.error = null;
      })
      .addCase(fetchArchivePage.fulfilled, (state, action) => {
        state.status = Status.Succeeded;

        state.items = action.payload.items;
        state.total = action.payload.total;
        state.page = action.payload.page ?? state.page;
        state.totalPages = action.payload.totalPages ?? state.totalPages;

        state.error = null;
      })
      .addCase(fetchArchivePage.rejected, (state, action) => {
        state.status = Status.Failed;
        state.error = action.payload ?? 'Помилка';
      })

      // -------------------------------------------------------------
      .addCase(fetchArchiveFiltered.pending, state => {
        state.status = Status.Loading;
        state.error = null;
      })
      .addCase(fetchArchiveFiltered.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.items = action.payload.items;
        state.total = action.payload.total;
        state.page = action.payload.page ?? state.page;
        state.totalPages = action.payload.totalPages ?? state.totalPages;

        state.error = null;
      })
      .addCase(fetchArchiveFiltered.rejected, (state, action) => {
        state.status = Status.Failed;
        state.error = action.payload ?? 'Помилка';
      })
      // -------------------------------------------------------------
      .addCase(fetchArchiveById.pending, state => {
        state.status = Status.Loading;
        state.error = null;
        state.currentItem = null;
      })
      .addCase(fetchArchiveById.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.currentItem = action.payload;
        state.error = null;
      })
      .addCase(fetchArchiveById.rejected, (state, action) => {
        state.status = Status.Failed;
        state.currentItem = null;
        state.error = action.payload ?? 'Подію не знайдено';
      });
  },
});
export const { clearArchive, setActivePage, clearCurrentItem } =
  archiveSlice.actions;

export default archiveSlice.reducer;
