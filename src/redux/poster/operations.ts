import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInst } from '../../api/axiosInst';
import { ArchiveItem } from '../archive/types';

export const fetchLastYearPoster = createAsyncThunk<
  ArchiveItem[],
  void,
  { rejectValue: string }
>('poster/fetchLastYearPoster', async (_, thunkAPI) => {
  try {
    const today = new Date();
    const yearAgo = new Date();
    yearAgo.setFullYear(today.getFullYear() - 1);
    const yearAgoStr = yearAgo.toISOString().split('T')[0];

    const query = encodeURIComponent(
      `*[_type == "archive" &&  defined(poster) && date >= "${yearAgoStr}" ] | order(date desc, _createdAt desc){
      _id,
      title,
      date,
      category,
      poster
    }`
    );
    const response = await axiosInst.get<{ result: ArchiveItem[] }>(
      `?query=${query}`
    );
    const items = response.data.result;
    return items;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
