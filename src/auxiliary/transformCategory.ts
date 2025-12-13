import { categories, CategoryItem } from './categories';

export const transformCategory = (categoryValue: string): CategoryItem => {
  const found = categories.find(c => c.value === categoryValue);
  return found || { title: categoryValue, value: categoryValue };
};
