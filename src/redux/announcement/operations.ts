import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInst } from '../../api/axiosInst';
import { ArchiveItem } from '../archive/types';

export const fetchUpcomingEvents = createAsyncThunk<
  ArchiveItem[],
  void,
  { rejectValue: string }
>('announcement/fetchUpcomingEvents', async (_, thunkAPI) => {
  try {
    const today = new Date();
    const monthAgo = new Date();
    monthAgo.setMonth(today.getMonth() - 1);

    const fromDate = monthAgo.toISOString().split('T')[0];
    const query = encodeURIComponent(
      `*[_type == "archive" && date >= "${fromDate}" && category != "achievements"] | order(date desc, _createdAt desc){
        _id,
        title,
        date,        
        description,
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
