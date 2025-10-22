import { Component } from '@angular/core';

import { DefaultComponent } from './layout/default/default.component';

@Component({
  selector: 'app-root',
  imports: [DefaultComponent],
  template: `<app-layout-default></app-layout-default>`
})
export class AppComponent {
  title = 'Angular Stage';
}
