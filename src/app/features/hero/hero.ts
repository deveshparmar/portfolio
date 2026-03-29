import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
    ]
})
export class Hero {
  private portfolioService = inject(PortfolioService);
  personalInfo$ = this.portfolioService.getPortfolioData().pipe(
    map(data => data.personalInfo)
  );
}
