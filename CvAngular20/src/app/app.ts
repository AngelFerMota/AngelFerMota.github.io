import { Component, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Navbar from "./core/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CvAngular20');
  protected readonly isDarkMode = signal(true); // Empezamos en modo noche por defecto

  constructor() {
    // Aplicar el tema inicial
    effect(() => {
      if (this.isDarkMode()) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    });
  }

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
  }
}
