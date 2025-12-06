export interface SubMenuItem {
  label: string;
  path: string;
}

export interface MenuItem {
  title: string;
  to: string;
  items?: SubMenuItem[];
}
