import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInst } from '../../api/axiosInst';
import { BannerItem } from './types';

export const fetchActiveBanners = createAsyncThunk<
  BannerItem[],
  void,
  { rejectValue: string }
>('banner/fetchActiveBanners', async (_, thunkAPI) => {
  try {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const query = encodeURIComponent(
      `*[_type == "banner" && isActive == true &&
        (!defined(activeFrom) || activeFrom <= "${todayStr}") &&
        (!defined(activeTo) || activeTo >= "${todayStr}")] | order(priority desc, _createdAt desc){
        _id,   
        title,
        text,
        image,
        link,
        activeFrom,
        activeTo,
        priority,
        isActive
      }`
    );
    const response = await axiosInst.get<{ result: BannerItem[] }>(
      `?query=${query}`
    );
    const items = response.data.result;
    console.log('BANNERS', items);
    return items;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
