import { Component, ElementRef, ViewChild } from '@angular/core';
import { PlayServiceService } from '../services/play-service.service';

@Component({
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.css'],
})
export class PlayAreaComponent {
  constructor(private playServiceService: PlayServiceService) {}
  marvels = [
    {
      id: 1,
      name: 1,
      image: '../../assets/m1.jpeg',
    },
    {
      id: 2,
      name: 2,

      image: '../../assets/m2.jpeg',
    },
    {
      id: 3,
      name: 3,

      image: '../../assets/m3.jpeg',
    },
    {
      id: 4,
      name: 4,

      image: '../../assets/m4.jpeg',
    },
    {
      id: 5,
      name: 5,

      image: '../../assets/m5.jpeg',
    },
    {
      id: 6,
      name: 6,

      image: '../../assets/m6.jpeg',
    },
    {
      id: 7,
      name: 7,

      image: '../../assets/m7.jpeg',
    },
    {
      id: 8,
      name: 8,

      image: '../../assets/m8.jpeg',
    },
    {
      id: 9,
      name: 9,

      image: '../../assets/m9.jpeg',
    },
    {
      id: 10,
      name: 10,

      image: '../../assets/m10.jpeg',
    },
    {
      id: 11,
      name: 11,

      image: '../../assets/m1.jpeg',
    },
    {
      id: 12,
      name: 12,

      image: '../../assets/m12.jpeg',
    },
    {
      id: 13,
      name: 13,

      image: '../../assets/m13.jpeg',
    },
    {
      id: 14,
      name: 14,

      image: '../../assets/m14.jpeg',
    },
    {
      id: 15,
      name: 15,

      image: '../../assets/m15.jpeg',
    },
    {
      id: 16,
      name: 16,

      image: '../../assets/m16.jpeg',
    },
    {
      id: 17,
      name: 17,

      image: '../../assets/m17.jpeg',
    },
    {
      id: 18,
      name: 18,

      image: '../../assets/m18.jpeg',
    },
    {
      id: 19,
      name: 19,

      image: '../../assets/m19.jpeg',
    },
    {
      id: 20,
      name: 20,

      image: '../../assets/m20.jpeg',
    },
  ];
  randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min) + min);

  // suffle(data: any) {
  //   // objArr.map((item) => {
  //   // console.log(item);
  //   for (let items in data) {
  //     data[items].id = this.randomInt(0, 13);
  //   console.log(data[items].id = this.randomInt(0, 13))

  //   }
  // }
  // Fisher-Yates (Knuth) shuffle algorithm
  shuffle(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  // shuffledIds: number = this.shuffle(this.marvels.map((marvel) => marvel.id));
  clickedphotoId?: number[] = [];
  onClickOnPhoto(photoId: number) {
    // console.log(this.marvels.length);
    this.shuffle(this.marvels);

    if (this.clickedphotoId?.includes(photoId)) {
      // console.log(`Image with ID ${photoId} clicked twice.`);
      alert(`You forget the rules😁`);
      this.playServiceService.currentScore = 0;
      this.clickedphotoId = [];
      // this.dialogueBoxPresent = !this.dialogueBoxPresent;
      this.playServiceService.onStart();
    } else {
      this.clickedphotoId?.push(photoId);
      this.playServiceService.currentScore++;
      if (
        this.playServiceService.currentScore > this.playServiceService.highScore
      ) {
        this.playServiceService.highScore =
          this.playServiceService.currentScore;
        console.log('badhi bho');
      }
    }
  }
}
