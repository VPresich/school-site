export interface CategoryItem {
  title: string;
  value: string;
}

export const categories: CategoryItem[] = [
  { title: 'Концерт', value: 'concert' },
  { title: 'Виставка', value: 'exhibition' },
  { title: 'Майстер-клас', value: 'workshop' },
  { title: 'Відкритий урок', value: 'lesson' },
  { title: 'Екзамен', value: 'exam' },
  { title: 'Фестиваль', value: 'festival' },
  { title: 'Прийом', value: 'admissions' },
  { title: 'Оголошення', value: 'announcement' },
  { title: 'Прослухування', value: 'audition' },
  { title: 'Творчий вечір', value: 'meeting' },
  { title: 'Досягнення', value: 'achievements' },
];
