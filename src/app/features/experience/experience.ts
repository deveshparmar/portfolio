import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
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
        ])
      ])
    ])
  ]
})
export class Experience {
  experiences = [
    {
      company: 'Educational Initiatives',
      role: 'Software Development Engineer',
      highlights: [
        'Built multi-tenant microservices platform (99.7% uptime)',
        'Handled 15K+ req/min using Redis cluster',
        'Optimized queries from 800ms → 120ms',
        'Reduced DB load by 65%'
      ]
    }
  ];
}
