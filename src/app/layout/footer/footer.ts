import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private portfolioService = inject(PortfolioService);
  name$ = this.portfolioService.getPortfolioData().pipe(
    map(data => data.personalInfo.name)
  );
}
