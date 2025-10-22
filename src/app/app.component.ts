import { Component } from '@angular/core';

import { DefaultComponent } from './layout/default/default.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="full-height">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'Angular Stage';
}
