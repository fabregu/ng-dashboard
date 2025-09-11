import { Routes } from "@angular/router";

export const settingsRoute: Routes = [
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent),
        title: 'Profile'
    },
    {
        path: '**',
        redirectTo: 'profile',
        pathMatch: 'full'
    }
];