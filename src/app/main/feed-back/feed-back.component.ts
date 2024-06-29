import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.scss']
})
export class FeedBackComponent implements OnInit {

  countdownInterval: any;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(): void {
    this.startCountdown('2024-12-31T00:00:00'); // Set your target date here
  }

  ngOnDestroy(): void {
    clearInterval(this.countdownInterval);
  }

  startCountdown(targetDate: string): void {
    const target = new Date(targetDate).getTime();
    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.countdownInterval);
        // Optionally handle completion of countdown
      }
    }, 1000);
  }

}
