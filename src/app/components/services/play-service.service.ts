import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayServiceService {
  currentScore: number = 0;
  highScore: number = 0;
  dialogueBoxPresent: boolean = true;

  onStart() {
    this.dialogueBoxPresent = !this.dialogueBoxPresent;
  }

  constructor() { }
}
 