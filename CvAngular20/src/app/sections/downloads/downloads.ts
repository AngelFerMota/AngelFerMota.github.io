import { Component } from '@angular/core';

@Component({
  selector: 'app-downloads',
  standalone: true,
  imports: [],
  templateUrl: './downloads.html',
  styleUrls: ['./downloads.css'],
})
export class Downloads {
  files = [
    { label: 'Download CV PDF', url: 'assets/files/CV - Ángel Fernández Mota.pdf' },
    { label: 'Download Letter of Recommendation', url: 'assets/files/Carta de Recomendación Ángel Fernández Mota.pdf' },
  ];
}
