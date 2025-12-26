import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';
import { transformCategory } from '../../auxiliary/transformCategory';

const selectAchivements = (state: RootState) => state.achievement.items;
export const selectAchivementsStatus = (state: RootState) =>
  state.achievement.status;
export const selectAchivementsError = (state: RootState) =>
  state.achievement.error;

export const selectAchivementsUI = createSelector(selectAchivements, items =>
  items.map(item => ({
    ...item,
    category: transformCategory(item.category),
  }))
);

export const selectDiplomas = createSelector(selectAchivements, items =>
  items.flatMap(item =>
    (item.diplomas ?? []).map(diploma => ({
      diploma,
      archiveId: item._id,
    }))
  )
);
