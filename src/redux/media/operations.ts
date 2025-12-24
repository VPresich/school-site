import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInst } from '../../api/axiosInst';
import { MediaDocument } from './types';

export const fetchMedia = createAsyncThunk<
  MediaDocument,
  void,
  { rejectValue: string }
>('media/fetchMedia', async (_, thunkAPI) => {
  try {
    const query = encodeURIComponent(
      `*[_type == "media"][0]{
        _type,
        title,
        videos,
        photos,
      }`
    );

    const response = await axiosInst.get<{ result: MediaDocument }>(
      `?query=${query}`
    );
    return response.data.result;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
