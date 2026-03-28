import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Fade } from "../../shared/fade";

@Component({
  selector: 'app-metrics',
  imports: [CommonModule, Fade],
  templateUrl: './metrics.html',
  styleUrl: './metrics.scss',
})
export class Metrics {
  kafka = 12000;
  redis = 99;
  latency = 120;

  ngOnInit() {
    setInterval(() => {
      this.kafka = 14000 + Math.floor(Math.random() * 2000);
      this.redis = 97 + Math.random() * 2;
      this.latency = 100 + Math.random() * 50;
    }, 2000);
  }
}
