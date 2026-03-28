import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  imports: [CommonModule],
  templateUrl: './skill.html',
  styleUrl: './skill.scss',
})
export class Skill {
  focusAreas = [
    'Backend Engineering',
    'Distributed Systems',
    'Data-Intensive Applications',
    'System Design',
    'Database Optimization'
  ];

  skillDomains = [
    {
      title: 'Languages',
      icon: '💻',
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python']
    },
    {
      title: 'Backend & Distributed Systems',
      icon: '⚙️',
      skills: [
        'Node.js', 'Express.js', 'Spring Boot',
        'Microservices', 'REST APIs', 'Kafka',
        'Message Queues', 'Event-Driven'
      ]
    },
    {
      title: 'Data & Databases',
      icon: '🗄️',
      skills: [
        'PostgreSQL', 'Query Optimization', 'Indexing',
        'Partitioning', 'CTEs', 'Redis',
        'Caching', 'Pub/Sub', 'MongoDB', 'MySQL'
      ]
    },
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['Angular', 'HTML', 'CSS']
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        'AWS EC2', 'S3', 'RDS', 'CloudWatch',
        'Docker', 'CI/CD', 'Load Balancing', 'Nginx'
      ]
    },
    {
      title: 'Tools',
      icon: '🛠️',
      skills: [
        'Git', 'GitHub', 'Postman',
        'VS Code', 'IntelliJ', 'Linux'
      ]
    }
  ];

  certifications = [
    {
      title: 'Azure Fundamentals (AZ-900)',
      org: 'Microsoft',
      date: 'Mar 2023'
    },
    {
      title: 'Power Platform Fundamentals (PL-900)',
      org: 'Microsoft',
      date: 'Mar 2023'
    },
    {
      title: 'Neural Networks & Deep Learning',
      org: 'Coursera',
      date: 'Jan 2023'
    },
    {
      title: 'ML to DL: Remote Sensing',
      org: 'ISRO',
      date: 'Jul 2022'
    }
  ];
}
