import { RootState } from '../store';

export const selectAllDepartments = (state: RootState) => state.departments.all;
export const selectDepartmentBySlug = (slug: string) => (state: RootState) =>
  state.departments.all.find(d => d.slug?.current === slug) || null;
