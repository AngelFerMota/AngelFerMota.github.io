import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { projects, stack } from './content';
@Component({selector:'app-root',standalone:true,templateUrl:'./app.html',changeDetection:ChangeDetectionStrategy.OnPush})
export class App {
  readonly projects = projects;
  readonly stack = stack;
  readonly menuOpen = signal(false);
  readonly linkedin = 'https://www.linkedin.com/in/%C3%A1ngel-fern%C3%A1ndez-mota/';
  closeMenu(): void { this.menuOpen.set(false); }
  toggleTheme(): void {
    const theme = document.documentElement.dataset['theme'] === 'light' ? 'dark' : 'light';
    document.documentElement.dataset['theme'] = theme;
    try { localStorage.setItem('theme',theme); } catch { /* Storage can be disabled by the browser. */ }
  }
}
