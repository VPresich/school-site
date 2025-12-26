import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInst } from '../../api/axiosInst';
import { ArchiveItem } from '../archive/types';

export const fetchLastYearDiplomas = createAsyncThunk<
  ArchiveItem[],
  void,
  { rejectValue: string }
>('achievement/fetchLastYearDiplomas', async (_, thunkAPI) => {
  try {
    const today = new Date();
    const yearAgo = new Date();
    yearAgo.setFullYear(today.getFullYear() - 1);
    const yearAgoStr = yearAgo.toISOString().split('T')[0];

    const query = encodeURIComponent(
      `*[_type == "archive" &&  category == "achievements" &&
        defined(diplomas)  && date >= "${yearAgoStr}" ] | order(date desc, _createdAt desc){
        _id,   
        date,
        category,
        diplomas,      
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
