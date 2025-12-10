import { RootState } from '../store';

export const selectAboutPage = (state: RootState) => state.about.page;
export const selectAboutTitle = (state: RootState) => state.about.page?.title;
export const selectAboutInfo = (state: RootState) =>
  state.about.page?.schoolInfo;

export const selectDirector = (state: RootState) => state.about.page?.director;

export const selectDirectorInfo = (state: RootState) =>
  state.about.page?.director?.info || [];

export const selectDirectorPhoto = (state: RootState) =>
  state.about.page?.director?.photo;

export const selectTeachersSection = (state: RootState) =>
  state.about.page?.teachersSection;

export const selectTeachersText = (state: RootState) =>
  state.about.page?.teachersSection?.statsText || [];

export const selectTeachers = (state: RootState) =>
  state.about.page?.teachersSection?.teachers || [];

export const selectTeachersGallery = (state: RootState) =>
  state.about.page?.teachersSection?.teachersGallery || [];

export const selectAboutGoals = (state: RootState) => state.about.page?.goals;
export const selectAboutTasks = (state: RootState) => state.about.page?.tasks;
export const selectAboutDevelopment = (state: RootState) =>
  state.about.page?.development;
