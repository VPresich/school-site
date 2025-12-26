import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInst } from '../../api/axiosInst';
import {
  ArchiveItem,
  FetchArchivePageResponse,
  FetchArchivePageArgs,
  FetchArchiveFilteredArgs,
} from './types';

// -------------------------------------------------------------

export const fetchArchive = createAsyncThunk<
  ArchiveItem[],
  void,
  { rejectValue: string }
>('archive/fetchArchive', async (_, thunkAPI) => {
  try {
    const query = encodeURIComponent(
      '*[_type == "archive"] | order(date desc, _createdAt desc){_id, title, date, enddate, description, category, images, videos, diplomas, poster}'
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

// -------------------------------------------------------------

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
            _id,
            title,
            date,
            enddate,
            description,
            category,
            images,
            videos,
            diplomas,
            poster
          },
        "total": count(*[_type == "archive"])
      }
    `);

    const response = await axiosInst.get<{
      result: {
        items: ArchiveItem[];
        total: number;
      };
    }>(`?query=${query}`);

    const { items, total } = response.data.result;

    return {
      items,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// -------------------------------------------------------------

export const fetchArchiveFiltered = createAsyncThunk<
  FetchArchivePageResponse,
  FetchArchiveFilteredArgs,
  { rejectValue: string }
>('archive/fetchArchiveFiltered', async (args, thunkAPI) => {
  try {
    const { page, limit, startDate, endDate, categories } = args;

    const offset = (page - 1) * limit;
    const end = offset + limit;

    const filters: string[] = ['_type == "archive"'];
    if (startDate) {
      filters.push(`date >= "${startDate}"`);
    }
    if (endDate) {
      filters.push(`date <= "${endDate}"`);
    }
    if (categories.length > 0) {
      filters.push(`category in ${JSON.stringify(categories)}`);
    }

    const where = filters.join(' && ');

    const query = encodeURIComponent(`
      {
        "items": *[${where}]
          | order(date desc, _createdAt desc)
          [${offset}...${end}]{
            _id,
            title,
            date,
            enddate,
            description,
            category,
            images,
            videos,
            diplomas,
            poster
          },
        "total": count(*[${where}])
      }
    `);

    const response = await axiosInst.get<{
      result: {
        items: ArchiveItem[];
        total: number;
      };
    }>(`?query=${query}`);

    const { items, total } = response.data.result;

    return {
      items,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchArchiveById = createAsyncThunk<
  ArchiveItem,
  string,
  { rejectValue: string }
>('archive/fetchArchiveById', async (id, thunkAPI) => {
  try {
    const query = encodeURIComponent(
      `*[_type == "archive" && _id == "${id}"][0]{
        _id,
        title,
        date,
        enddate,
        description,
        category,
        images,
        videos,
        diplomas,
        poster
      }`
    );

    const response = await axiosInst.get<{ result: ArchiveItem }>(
      `?query=${query}`
    );

    if (!response.data.result) {
      return thunkAPI.rejectWithValue('Подію не знайдено');
    }

    return response.data.result;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
