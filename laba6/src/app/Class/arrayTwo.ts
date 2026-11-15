import { randomInt } from './randomInt';

export class ArrayTwo {
  b: number[][] = [];
  positiveCountAboveDiag: number = 0;

  constructor() {}

  genArray() {
    this.b = [];
    this.positiveCountAboveDiag = 0;
    let rnd = new randomInt();

    for (let i = 0; i < 5; i++) {
      this.b[i] = [];
      for (let j = 0; j < 5; j++) {
        this.b[i][j] = rnd.randomInteger(-20, 20); 
        
        if (j > i && this.b[i][j] > 0) {
          this.positiveCountAboveDiag++;
        }
      }
    }
  }
}