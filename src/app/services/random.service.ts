import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {

  constructor() { }

  getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

}
