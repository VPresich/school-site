import { createSlice } from '@reduxjs/toolkit';
import { fetchLastYearPoster } from './operations';
import { Status } from '../archive/types';
import { PosterState } from './types';

const initialState: PosterState = {
  items: [],
  status: Status.Idle,
  error: null,
};

const posterSlice = createSlice({
  name: 'poster',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLastYearPoster.pending, state => {
        state.status = Status.Loading;
        state.error = null;
      })
      .addCase(fetchLastYearPoster.fulfilled, (state, action) => {
        state.status = Status.Succeeded;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchLastYearPoster.rejected, (state, action) => {
        state.status = Status.Failed;
        state.error = action.payload;
      });
  },
});

export default posterSlice.reducer;
