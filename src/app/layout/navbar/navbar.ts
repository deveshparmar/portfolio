import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
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
  private portfolioService = inject(PortfolioService);
  
  personalInfo$ = this.portfolioService.getPortfolioData().pipe(
    map(data => data.personalInfo)
  );

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }
}
