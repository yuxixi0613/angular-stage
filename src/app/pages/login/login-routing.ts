import { Route } from '@angular/router';

import { LoginComponent } from './login.component';

export default [
  {
    path: 'login',
    component: LoginComponent,
    // title: 'NgAntAdmin', // angular14版本以上支持，修改浏览器title
    data: { key: 'login', shouldDetach: 'no' }
    // children: [{ path: '', redirectTo: '/login', pathMatch: 'full' }]
  }
] as Route[];
