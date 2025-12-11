export const transformCategory = (category: string) => {
  const map: Record<string, { title: string; value: string }> = {
    concert: { title: 'Концерт', value: 'concert' },
    exhibition: { title: 'Виставка', value: 'exhibition' },
    workshop: { title: 'Майстер-клас', value: 'workshop' },
    lesson: { title: 'Відкритий урок', value: 'lesson' },
    exam: { title: 'Екзамен', value: 'exam' },
    festival: { title: 'Фестиваль', value: 'festival' },
    admissions: { title: 'Прийом', value: 'admissions' },
    announcement: { title: 'Оголошення', value: 'announcement' },
    audition: { title: 'Прослухування', value: 'audition' },
    meeting: { title: 'Творчий вечір', value: 'meeting' },
  };
  return map[category] || { title: category, value: category };
};
