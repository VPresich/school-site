import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

import { MediaDocument } from './types';
export const selectMediaState = (state: RootState) => state.media;

export const selectMediaPage = (state: RootState): MediaDocument | undefined =>
  state.media.page;

export const selectMediaLoading = (state: RootState): boolean =>
  state.media.loading;

export const selectMediaError = (state: RootState): string | undefined =>
  state.media.error;

export const selectMediaVideos = createSelector(
  selectMediaPage,
  page => page?.videos ?? []
);

export const selectMediaPhotos = createSelector(
  selectMediaPage,
  page => page?.photos ?? []
);

export const selectMediaTitle = (state: RootState): string =>
  state.media.page?.title ?? '';
