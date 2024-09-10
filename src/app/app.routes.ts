import { Routes } from '@angular/router';

// generate new pages and routes ionic generate page pageName
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  }
];
