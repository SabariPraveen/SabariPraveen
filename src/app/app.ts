import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SabariPraveenPortfolio');
  protected readonly isMenuOpen = signal(false);
  protected readonly navItems = [
    { label: 'Home', route: '/', fragment: undefined },
    { label: 'About', route: '/', fragment: 'about' },
    { label: 'Work', route: '/', fragment: 'work' },
    { label: 'Contact', route: '/contact', fragment: undefined }
  ];

  protected toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
