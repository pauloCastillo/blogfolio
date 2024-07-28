import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroeComponent } from './heroe/heroe.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroeComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
