import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState, DateRange } from './types';
import { categories } from '../../auxiliary/categories';

const initialState: FilterState = {
  dateRange: { startDate: null, endDate: null },
  selectedCats: categories.map(cat => cat.value),
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    saveDateRange: (state, action: PayloadAction<DateRange>) => {
      state.dateRange = action.payload;
    },

    saveSelectedCats: (state, action: PayloadAction<string[]>) => {
      state.selectedCats = action.payload;
    },
  },
});

export const { saveDateRange, saveSelectedCats } = filterSlice.actions;
export default filterSlice.reducer;
