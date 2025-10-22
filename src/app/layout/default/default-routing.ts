import { Route } from '@angular/router';

import { DefaultComponent } from './default.component';

export default [
  {
    path: '',
    component: DefaultComponent,
    data: { shouldDetach: 'no', preload: true },
    canActivateChild: [],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
      // {
      //   path: 'dashboard',
      //   data: { preload: true },
      //   loadChildren: () => import('../../pages/dashboard/dashboard-routing')
      // },
    ]
  }
] satisfies Route[];
