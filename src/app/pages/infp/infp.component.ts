import { Component } from '@angular/core';
import { LinkCardComponent } from '@/components/link-card/link-card.component';

@Component({
  selector: 'app-infp',
  standalone: true,
  imports: [LinkCardComponent],
  templateUrl: './infp.component.html',
  styleUrl: './infp.component.scss'
})
export class InfpComponent {}
