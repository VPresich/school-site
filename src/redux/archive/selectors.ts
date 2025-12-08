import { RootState } from '../store';

export const selectArchiveList = (state: RootState) => state.archive.items;
