import { createSlice } from '@reduxjs/toolkit';
import { fetchLastYearDiplomas } from './operations';
import { Status } from '../archive/types';
import { AchievementState } from './types';

const initialState: AchievementState = {
  items: [],
  status: Status.Idle,
  error: null,
};

const achievementSlice = createSlice({
  name: 'achievement',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLastYearDiplomas.pending, state => {
        state.status = Status.Loading;
        state.error = null;
      })
      .addCase(fetchLastYearDiplomas.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchLastYearDiplomas.rejected, (state, action) => {
        state.status = Status.Failed;
        state.error = action.payload;
      });
  },
});

export default achievementSlice.reducer;
