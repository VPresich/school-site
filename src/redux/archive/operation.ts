import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInst } from '../../api/axiosInst';
import {
  ArchiveItem,
  FetchArchivePageResponse,
  FetchArchivePageArgs,
} from './types';
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

export const fetchArchivePage = createAsyncThunk<
  FetchArchivePageResponse,
  FetchArchivePageArgs,
  { rejectValue: string }
>('archive/fetchArchivePage', async ({ page, limit }, thunkAPI) => {
  try {
    const offset = (page - 1) * limit;
    const end = offset + limit;

    const query = encodeURIComponent(`
        {
          "items": *[_type == "archive"]
            | order(date desc, _createdAt desc)
            [${offset}...${end}]{
              title, date, enddate, description, category, images, videos
            },
          "total": count(*[_type == "archive"])
        }
      `);

    const response = await axiosInst.get<{
      result: { items: any[]; total: number };
    }>(`?query=${query}`);

    const { items, total } = response.data.result;

    return {
      items: items.map(item => ({
        ...item,
        category: transformCategory(item.category),
      })),
      total,
      totalPages: Math.ceil(total / limit),
    };
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
