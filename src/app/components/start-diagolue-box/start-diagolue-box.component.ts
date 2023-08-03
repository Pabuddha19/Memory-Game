import { PlayServiceService } from './../services/play-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-start-diagolue-box',
  templateUrl: './start-diagolue-box.component.html',
  styleUrls: ['./start-diagolue-box.component.css'],
})
export class StartDiagolueBoxComponent {
  constructor(private playServiceService: PlayServiceService) {}
  onStart() {
    this.playServiceService.onStart() ;
  }

  // dialogueBoxPresent: boolean = true;

  get dialogueBoxPresent() {
    return this.playServiceService.dialogueBoxPresent;
  }
  // onStart() {
  //   this.dialogueBoxPresent = !this.dialogueBoxPresent;
  // }
}
