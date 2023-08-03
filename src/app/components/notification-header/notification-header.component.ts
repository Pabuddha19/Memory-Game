import { Component } from '@angular/core';
import { PlayServiceService } from '../services/play-service.service';

@Component({
  selector: 'app-notification-header',
  templateUrl: './notification-header.component.html',
  styleUrls: ['./notification-header.component.css'],
})
export class NotificationHeaderComponent {
  constructor(private playServiceService: PlayServiceService) {}

  get currentScore() {
    return this.playServiceService.currentScore;
  }

  get highScore() {
    return this.playServiceService.highScore;
  }
}
