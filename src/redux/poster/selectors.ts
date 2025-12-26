import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';
import { transformCategory } from '../../auxiliary/transformCategory';

const selectPosters = (state: RootState) => state.poster.items;
export const selectPostersStatus = (state: RootState) => state.poster.status;
export const selectPostersError = (state: RootState) => state.poster.error;

// const selectSelectedCats = (state: RootState) => state.filter.selectedCats;

export const selectPostersUI = createSelector(selectPosters, items =>
  items.map(item => ({
    ...item,
    category: transformCategory(item.category),
  }))
);

// export const selectPostersByCategories = createSelector(
//   selectPostersUI,
//   selectSelectedCats,
//   (items, selectedCats) => {
//     if (!selectedCats || selectedCats.length === 0) return items;

//     return items.filter(item => selectedCats.includes(item.category.value));
//   }
// );
