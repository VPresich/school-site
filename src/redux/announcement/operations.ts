import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInst } from '../../api/axiosInst';
import { ArchiveItem } from '../archive/types';

export const fetchUpcomingEvents = createAsyncThunk<
  ArchiveItem[],
  void,
  { rejectValue: string }
>('announcement/fetchUpcomingEvents', async (_, thunkAPI) => {
  try {
    // const today = new Date().toISOString().split('T')[0];
    const today = '2016-01-01';
    const query = encodeURIComponent(
      `*[_type == "archive" && date >= "${today}"] | order(date desc, _createdAt desc){
        title,
        date,
        enddate,
        description,
        category,
        images,
        videos
      }`
    );
    const response = await axiosInst.get<{ result: ArchiveItem[] }>(
      `?query=${query}`
    );
    const items = response.data.result;
    console.log('ITEMS', items);
    return items;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
