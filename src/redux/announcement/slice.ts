import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUpcomingEvents } from './operations';
import { Status } from '../archive/types';
import { AnnouncementState } from './types';

const initialState: AnnouncementState = {
  items: [],
  status: Status.Idle,
  error: null,
};

const announcementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUpcomingEvents.pending, state => {
        state.status = Status.Loading;
        state.error = null;
      })
      .addCase(fetchUpcomingEvents.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchUpcomingEvents.rejected, (state, action) => {
        state.status = Status.Failed;
        state.error = action.payload;
      });
  },
});

export default announcementSlice.reducer;
