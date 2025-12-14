import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInst } from '../../api/axiosInst';
import { Department } from './types';

export const fetchDepartments = createAsyncThunk<
  Department[],
  void,
  { rejectValue: string }
>('departments/fetchDepartments', async (_, thunkAPI) => {
  try {
    const query = encodeURIComponent(
      `*[_type == "department"] | order(title asc){
        _id,
        title,
        slug,
        resume,
        teachersText,
        teachersGallery,
        teachersList,
        studentsText,
        studentsGallery
      }`
    );

    const response = await axiosInst.get<{ result: Department[] }>(
      `?query=${query}`
    );
    return response.data.result;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchDepartmentBySlug = createAsyncThunk<
  Department,
  string,
  { rejectValue: string }
>('departments/fetchDepartmentBySlug', async (slug, thunkAPI) => {
  try {
    const query = encodeURIComponent(
      `*[_type == "department" && slug.current == "${slug}"][0]{
        _id,
        title,
        slug,
        resume,
        teachersText,
        teachersGallery,
        teachersList,
        studentsText,
        studentsGallery
      }`
    );

    const response = await axiosInst.get<{ result: Department }>(
      `?query=${query}`
    );
    return response.data.result;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
