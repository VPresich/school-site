import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInst } from '../../api/axiosInst';
import { HomeDocument } from './types';

export const fetchHome = createAsyncThunk<
  HomeDocument,
  void,
  { rejectValue: string }
>('home/fetchHome', async (_, thunkAPI) => {
  try {
    const query = encodeURIComponent(
      `*[_type == "home"][0]{
         _type,
         title,
         welcomeText,
         shortDescription,
         departments,
         ctaSection   
      }`
    );

    const response = await axiosInst.get<{ result: HomeDocument }>(
      `?query=${query}`
    );
    return response.data.result;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
