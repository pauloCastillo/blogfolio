import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
})
export class WorksComponent {}
