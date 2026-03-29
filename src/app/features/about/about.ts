import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private portfolioService = inject(PortfolioService);
  
  aboutData$ = this.portfolioService.getPortfolioData().pipe(
    map(data => data.about)
  );
  
  personalInfo$ = this.portfolioService.getPortfolioData().pipe(
    map(data => data.personalInfo)
  );
}
