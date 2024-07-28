import { Component, output } from '@angular/core';

@Component({
  selector: 'button[appBtn]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  title = 'descargar cv';
  downloadCv = output();

  onDownloadCV() {
    console.log('hizo click');
  }
}
