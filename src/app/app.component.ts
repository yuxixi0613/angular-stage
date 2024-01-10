import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng17';
  a = 1;
  qqq = 2;
  zxc = '';

  qwe() {
    let asd = 1;
    switch (asd) {
      case 1:
        break;

      default:
    }
  }

  asd() {}
}
