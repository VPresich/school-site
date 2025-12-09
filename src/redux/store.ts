// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../redux/menu/slice';
import archiveReducer from './archive/slice';
import departmentsReducer from './departments/slice';
import loaderReduser from './loader/slice';
import homeReduser from './home/slice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    archive: archiveReducer,
    departments: departmentsReducer,
    loader: loaderReduser,
    home: homeReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
