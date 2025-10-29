import { Route } from '@angular/router';

export default [
  { path: '', redirectTo: 'analysis', pathMatch: 'full' },
  {
    title: '分析页',
    path: 'analysis',
    data: { preload: true, key: 'analysis' },
    loadComponent: () =>
      import('./analysis/analysis.component').then(m => m.AnalysisComponent)
  }
] satisfies Route[];
