import { createSlice } from '@reduxjs/toolkit';
import { fetchActiveBanners } from './operations';
import { Status } from '../archive/types';
import { BannerItem } from './types';

interface BannerState {
  items: BannerItem[];
  status: Status;
  error: string | null;
}

const initialState: BannerState = {
  items: [],
  status: Status.Idle,
  error: null,
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchActiveBanners.pending, state => {
        state.status = Status.Loading;
        state.error = null;
      })
      .addCase(fetchActiveBanners.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.items = action.payload;
      })
      .addCase(fetchActiveBanners.rejected, (state, action) => {
        state.status = Status.Failed;
        state.error = action.payload ?? 'Failed to fetch banners';
      });
  },
});

export default bannerSlice.reducer;
