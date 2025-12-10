import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInst } from '../../api/axiosInst';
import { AboutDocument } from './types';

export const fetchAbout = createAsyncThunk<
  AboutDocument,
  void,
  { rejectValue: string }
>('about/fetchAbout', async (_, thunkAPI) => {
  try {
    const query = encodeURIComponent(
      `*[_type == "about"][0]{
        _type,
        title,
        schoolInfo,
        director,
        teachersSection,
        goals,
        tasks,
        development
      }`
    );

    const response = await axiosInst.get<{ result: AboutDocument }>(
      `?query=${query}`
    );
    return response.data.result;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
