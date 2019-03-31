import { Injectable } from '@angular/core';
import {RandomService} from '../../services/random.service';

@Injectable()
export class MultiplicationConfigService {

  validationDuration = 1;

  minPrimaryFactor = 0;
  minSecondaryFactor = 0;

  maxPrimaryFactor = 100;
  maxSecondaryFactor = 100;

  constructor(private randomService: RandomService) {
  }

  getPrimaryFactor(): number {
    return this.randomService.getRandomNumberFromRange(this.minPrimaryFactor, this.maxPrimaryFactor);
  }

  getSecondaryFactor(): number {
    return this.randomService.getRandomNumberFromRange(this.minSecondaryFactor, this.maxSecondaryFactor);
  }
}
