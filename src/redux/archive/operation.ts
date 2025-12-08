import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInst } from '../../api/axiosInst';
import { ArchiveItem } from './types';
import { transformCategory } from '../../auxiliary/transformCategory';

export const fetchArchive = createAsyncThunk<
  ArchiveItem[],
  void,
  { rejectValue: string }
>('archive/fetchArchive', async (_, thunkAPI) => {
  try {
    const query = encodeURIComponent(
      '*[_type == "archive"] | order(date desc, _createdAt desc){title, date, enddate, description, category, images, videos}'
    );
    const response = await axiosInst.get<{ result: ArchiveItem[] }>(
      `?query=${query}`
    );
    const result = response.data.result.map((item: any) => ({
      ...item,
      category: transformCategory(item.category),
    }));

    return result;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
