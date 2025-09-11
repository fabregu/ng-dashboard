import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const dasboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home',
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../components/settings/settings.route').then(
            (m) => m.settingsRoute
          ),
      },
      {
        path: 'drawer',
        loadChildren: () =>
          import('../components/drawer/drawer.route').then(
            (m) => m.drawerRoute
          ),
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
