import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.html',
  styleUrl: './skill.scss',
})
export class Skill {
  private portfolioService = inject(PortfolioService);
  
  skillsData$ = this.portfolioService.getPortfolioData().pipe(
    map(data => data.skills)
  );

  focusAreas$ = this.skillsData$.pipe(map(s => s.focusAreas));
  skillDomains$ = this.skillsData$.pipe(map(s => s.domains));
  certifications$ = this.skillsData$.pipe(map(s => s.certifications));
}
