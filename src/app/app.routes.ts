import { Routes } from '@angular/router';
import { SchoolManageComponent } from '@pages/school-manage/school-manage.component';

// 一级路由
export const routes: Routes = [
  {
    path: 'school-manage',
    title: '校园管理',
    component: SchoolManageComponent,
  },
  // {
  //   path: 'school-consume',
  //   title: '校园消费',
  // },
  // {
  //   path: 'school-3',
  //   title: '校园3',
  // },
  // {
  //   path: 'school-4',
  //   title: '校园4',
  // },
];
