import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

export interface PortfolioData {
  personalInfo: {
    name: string;
    role: string;
    location: string;
    experience: string;
    company: string;
    resumeUrl: string;
    education: {
      degree: string;
      school: string;
      duration: string;
      cgpa: string;
    };
  };
  about: {
    description: string[];
    tech: string[];
    stats: Array<{ label: string; value: string; icon: string }>;
    leadership: {
      role: string;
      duration: string;
      desc: string;
    };
    publication: {
      title: string;
      publisher: string;
    };
  };
  experience: Array<{
    role: string;
    company: string;
    duration: string;
    location: string;
    isCurrent: boolean;
    highlights: Array<{ text: string; impact?: string }>;
    tech: string[];
  }>;
  skills: {
    focusAreas: string[];
    domains: Array<{
      title: string;
      icon: string;
      skills: string[];
    }>;
    certifications: Array<{
      title: string;
      org: string;
      date: string;
    }>;
  };
  projects: Array<{
    title: string;
    icon: string;
    duration: string;
    desc: string;
    highlights: string[];
    tech: string[];
  }>;
  home: {
    intro: string;
    name: string;
    surname: string;
    role: string;
    desc: string;
    socials: {
      email: string;
      phone: string;
      linkedin: string;
      github: string;
      leetcode: string;
    };
    codeCard: {
      experience: {
        years: number;
        focus: string[];
      };
      currentlyBuilding: string;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private dataUrl = 'data/portfolio.json';
  private portfolioData$?: Observable<PortfolioData>;

  constructor(private http: HttpClient) {}

  getPortfolioData(): Observable<PortfolioData> {
    if (!this.portfolioData$) {
      this.portfolioData$ = this.http.get<PortfolioData>(this.dataUrl).pipe(
        shareReplay(1)
      );
    }
    return this.portfolioData$;
  }
}
