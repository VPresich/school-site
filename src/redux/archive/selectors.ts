import { RootState } from '../store';

export const selectArchiveList = (state: RootState) => state.archive.items;
export const selectPage = (state: RootState) => state.archive.page;
export const selectLimit = (state: RootState) => state.archive.limit;
export const selectTotal = (state: RootState) => state.archive.total;

export const selectArchiveStatus = (state: RootState) => state.archive.status;
export const selectArchiveError = (state: RootState) => state.archive.error;

export const selectTotalPages = (state: RootState) => {
  const total = state.archive.total;
  const limit = state.archive.limit;
  return Math.ceil(total / limit);
};
