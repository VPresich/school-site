import { RootState } from '../store';

export const selectAllDepartments = (state: RootState) => state.departments.all;

export const selectDepartmentBySlug = (slug: string) => (state: RootState) => {
  const list = state.departments.all ?? [];

  return list.find(d => d?.slug?.current === slug) || null;
};
