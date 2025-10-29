import { Route } from '@angular/router';

export default [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  {
    // title: '表格',
    path: 'table',
    data: { preload: true, key: 'analysis' },
    loadComponent: () => import('./table/table.component').then(m => m.TableComponent)
  }
] satisfies Route[];
