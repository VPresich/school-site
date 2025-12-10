import { RootState } from '../store';

export const selectAboutPage = (state: RootState) => state.about.schoolInfo;
