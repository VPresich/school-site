import { RootState } from '../store';

import { createSelector } from '@reduxjs/toolkit';
import { transformCategory } from '../../auxiliary/transformCategory';

export const selectArchiveItemsUI = createSelector(
  [(state: RootState) => state.archive.items],
  items =>
    items.map(item => ({
      ...item,
      category: transformCategory(item.category),
    }))
);

export const selectPage = (state: RootState) => state.archive.page;
export const selectLimit = (state: RootState) => state.archive.limit;
export const selectTotal = (state: RootState) => state.archive.total;
export const selectTotalPages = (state: RootState) => state.archive.totalPages;

export const selectArchiveStatus = (state: RootState) => state.archive.status;
export const selectArchiveError = (state: RootState) => state.archive.error;

const selectCurrentItem = (state: RootState) => state.archive.currentItem;

export const selectCurrentItemUI = createSelector(selectCurrentItem, item => {
  if (!item) return null;

  return {
    ...item,
    category: transformCategory(item.category),
  };
});
