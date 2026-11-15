import { randomInt } from './randomInt';

export class ArrayOne {
  windData: { direction: string, speed: number }[] = [];
  targetDaysCount: number = 0;

  constructor() {}

  genArray() {
    this.windData = [];
    this.targetDaysCount = 0;
    let rnd = new randomInt();
    const directions = ['північний', 'південний', 'східний', 'західний'];

    for (let i = 0; i < 10; i++) {
      let dirIndex = rnd.randomInteger(0, 3);
      let speed = rnd.randomInteger(0, 25);
      
      let direction = directions[dirIndex];
      this.windData.push({ direction, speed });

      if (direction === 'південний' && speed > 8) {
        this.targetDaysCount++;
      }
    }
  }
}