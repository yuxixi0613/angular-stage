import { Routes } from '@angular/router';
import { SchoolManageComponent } from '@pages/school-manage/school-manage.component';
import { LoginComponent } from './pages/login/login.component';
import { InfpComponent } from './pages/infp/infp.component';
import { WebComponent } from './pages/web/web.component';
import { LibraryComponent } from './pages/library/library.component';

// 一级路由
export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'infp',
    component: InfpComponent
  },
  {
    path: 'web',
    component: WebComponent
  },
  {
    path: 'library',
    component: LibraryComponent
  },
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
