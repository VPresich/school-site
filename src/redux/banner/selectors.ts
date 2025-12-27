import { RootState } from '../store';
export const selectBanners = (state: RootState) => state.banner.items;
export const selectBannersStatus = (state: RootState) => state.banner.status;
export const selectBannersError = (state: RootState) => state.banner.error;
