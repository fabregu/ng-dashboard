import { RouterState, Routes } from '@angular/router';

export const drawerRoute: Routes = [
  {
    path: 'table',
    loadComponent: () =>
      import('./table/table.component').then((m) => m.TableComponent),
    title: 'table',
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./list/list.component').then((m) => m.ListComponent),
    title: 'Drawer',
  },
  {
    path: 'button',
    loadComponent: () =>
      import('./button/button.component').then((m) => m.ButtonComponent),
    title: 'Button',
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs/tabs.component').then((m) => m.TabsComponent),
    title: 'Tabs',
  },
];
