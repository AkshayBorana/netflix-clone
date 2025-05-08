import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  // },
  {
    path: 'browse',
    loadComponent: () => import('./features/browse/browse.component').then(m => m.BrowseComponent)
  }
];
