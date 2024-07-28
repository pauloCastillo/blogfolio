import { Component } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
