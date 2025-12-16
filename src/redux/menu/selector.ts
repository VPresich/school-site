import { RootState } from '../store';
import { menu } from '../../components/NavBar/MenuData';

export const selectOpenIndex = (state: RootState) => state.menu.openIndex;
export const selectIsSidebarOpen = (state: RootState) =>
  state.menu.isSidebarOpen;

export const selectActiveMenuItem = (state: RootState) => {
  const index = state.menu.openIndex;
  if (
    index === null ||
    !menu[index] ||
    !menu[index].items ||
    menu[index].items.length === 0
  )
    return null;
  return menu[index];
};

export const selectHomeMenu = (state: RootState) => {
  if (!menu[0] || !menu[0].items || menu[0].items.length === 0) return null;
  return menu[0];
};
