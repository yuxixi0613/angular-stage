import { Routes } from '@angular/router';
import { SchoolManageComponent } from '@pages/school-manage/school-manage.component';
import { LoginComponent } from './pages/login/login.component';

// 一级路由
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    data: { preload: true },
    loadChildren: () => import('./pages/login/login-routing')
  },
  {
    path: 'school-manage',
    title: '校园管理',
    component: SchoolManageComponent
  }
];

// export const appRoutes = [
//   { path: '', redirectTo: '/login/login-form', pathMatch: 'full' },
//   { path: 'blank', loadChildren: () => import('./layout/blank/blank-routing') },
//   { path: 'login', data: { preload: true }, loadChildren: () => import('./pages/login/login-routing') },
//   { path: 'default', data: { preload: true }, loadChildren: () => import('./layout/default/default-routing') },
//   { path: '**', redirectTo: '/login/login-form' }
// ] as Routes;
