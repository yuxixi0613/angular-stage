import { Route, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

// 一级路由
export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    data: { preload: true },
    loadChildren: () => import('./pages/login/login-routing')
  }
];

export const appRoutes = [
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  {
    path: 'default',
    data: { preload: true },
    loadChildren: () => import('./layout/default/default.routing')
  },
  { path: '**', redirectTo: '/login/login-form' }
] satisfies Route[];
