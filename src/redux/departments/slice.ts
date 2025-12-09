import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Department, DepartmentsState } from './types';
import { fetchDepartments, fetchDepartmentBySlug } from './operations';

const initialState: DepartmentsState = {
  all: [],
  current: undefined,
  loading: false,
  error: undefined,
};

const departmentsSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {
    clearCurrentDepartment(state) {
      state.current = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchDepartments.pending, state => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchDepartments.fulfilled,
      (state, action: PayloadAction<Department[]>) => {
        state.loading = false;
        state.all = action.payload;
      }
    );
    builder.addCase(fetchDepartments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchDepartmentBySlug.pending, state => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchDepartmentBySlug.fulfilled,
      (state, action: PayloadAction<Department>) => {
        state.loading = false;
        state.current = action.payload;

        const index = state.all.findIndex(
          d => d.slug.current === action.payload.slug.current
        );

        if (index === -1) {
          state.all.push(action.payload);
        } else {
          state.all[index] = action.payload;
        }
      }
    );
    builder.addCase(fetchDepartmentBySlug.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { clearCurrentDepartment } = departmentsSlice.actions;
export default departmentsSlice.reducer;
