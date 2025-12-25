// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../redux/menu/slice';
import archiveReducer from './archive/slice';
import departmentsReducer from './departments/slice';
import loaderReduser from './loader/slice';
import homeReduser from './home/slice';
import aboutReducer from './about/slice';
import mediaReduser from './media/slice';
import announcementReducer from './announcement/slice';
import filterReducer from './filter/slice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    archive: archiveReducer,
    departments: departmentsReducer,
    loader: loaderReduser,
    home: homeReduser,
    about: aboutReducer,
    media: mediaReduser,
    announcement: announcementReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
