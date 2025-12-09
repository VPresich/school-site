import { RootState } from '../store';

export const selectHomePage = (state: RootState) => state.home.page;
