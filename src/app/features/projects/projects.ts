import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
   projects = [
    {
      title: 'Common Authoring Platform',
      icon: '🚀',
      duration: '2024 – Present',
      desc: 'Multi-tenant platform with event-driven microservices and real-time collaboration.',
      highlights: [
        '100K+ monthly active users',
        '99.7% uptime',
        '15K+ requests/min cache throughput'
      ],
      tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Angular', 'AWS']
    },

    {
      title: 'Distributed Job Processing System',
      icon: '⚙️',
      duration: 'Feb–Mar 2026',
      desc: 'Fault-tolerant distributed job scheduler with Kafka and retry mechanisms.',
      highlights: [
        'At-least-once delivery',
        'DLQ + retry system',
        'Idempotent processing',
        '100+ concurrent jobs tested'
      ],
      tech: ['Node.js', 'Kafka', 'PostgreSQL', 'Redis']
    },

    {
      title: 'Digital Watermarking using QR',
      icon: '🔐',
      duration: 'Aug–Nov 2023',
      desc: 'Secure image watermarking using QR embedding with encryption.',
      highlights: [
        'LSB, DCT, DWT algorithms',
        'RSA & AES encryption',
        'QR-based embedding'
      ],
      tech: ['Python', 'Image Processing', 'Security']
    },

    {
      title: 'Drug Quality Classification',
      icon: '🧠',
      duration: 'Nov–Dec 2022',
      desc: 'NLP-based system for predicting drug quality using sentiment analysis.',
      highlights: [
        'NLP sentiment analysis',
        'Multiple ML models',
        'Published at IEEE WCONF 2023'
      ],
      tech: ['Python', 'NLP', 'Machine Learning', 'Streamlit']
    }
  ];
}
