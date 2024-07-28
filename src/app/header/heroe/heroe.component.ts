import { Component } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.scss',
})
export class HeroeComponent {}
