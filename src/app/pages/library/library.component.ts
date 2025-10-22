import { Component } from '@angular/core';
import { LinkCardComponent } from '@/components/link-card/link-card.component';

@Component({
  selector: 'app-library',
  imports: [LinkCardComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {}
