import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectFilter = (state: RootState) => state.filter;

export const selectDateRange = createSelector(
  [selectFilter],
  filter => filter.dateRange
);

export const selectSelectedCats = createSelector(
  [selectFilter],
  filter => filter.selectedCats
);

export const selectFilterParams = createSelector(
  [selectDateRange, selectSelectedCats],
  (dateRange, selectedCats) => ({
    startDate: dateRange.startDate ? dateRange.startDate.toISOString() : null,

    endDate: dateRange.endDate ? dateRange.endDate.toISOString() : null,

    categories: selectedCats,
  })
);
