import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';
import { transformCategory } from '../../auxiliary/transformCategory';

const selectAnnouncements = (state: RootState) => state.announcement.items;
export const selectAnnouncementsStatus = (state: RootState) =>
  state.announcement.status;
export const selectAnnouncementsError = (state: RootState) =>
  state.announcement.error;

export const selectAnnouncementsUI = createSelector(
  selectAnnouncements,
  items =>
    items.map(item => ({
      ...item,
      category: transformCategory(item.category),
    }))
);
