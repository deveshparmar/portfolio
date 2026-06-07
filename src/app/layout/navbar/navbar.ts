import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ThemeService } from '../../core/services/theme.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  scrolled = false;
  menuOpen = false;

  private portfolioService = inject(PortfolioService);
  readonly themeService = inject(ThemeService);

  personalInfo$ = this.portfolioService.getPortfolioData().pipe(
    map(data => data.personalInfo)
  );

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggle();
  }
}
