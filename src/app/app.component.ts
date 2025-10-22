import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, DefaultComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Stage';
}
