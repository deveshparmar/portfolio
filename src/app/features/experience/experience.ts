import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  animations: [
    trigger('listAnim', [
      transition(':enter', [
        query('.card', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(150, [
            animate('500ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class Experience {
  private portfolioService = inject(PortfolioService);
  experiences$ = this.portfolioService.getPortfolioData().pipe(
    map(data => data.experience)
  );
}
