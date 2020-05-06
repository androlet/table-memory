import { Injectable } from '@angular/core';
import {Element} from '../models/element';
import {OBJECTS} from '../data/objects';
import {RandomService} from './random.service';

@Injectable()
export class ElementService {

  private objects: string[] = OBJECTS;

  constructor(private randomService: RandomService) {}

  private getRandomObject(): string {
    return this.objects[this.randomService.getRandomNumber(this.objects.length)];
  }

  getMinimumSizeAllowed(): number {
    return 0;
  }

  getMaximumSizeAllowed(): number {
    return 214;
  }

  getElementsStore(min, max): Element[] {
    const listOfElements: Element[] = [];
    const addedObjects = {};
    const numberOfElements = max - min;
    while (listOfElements.length < numberOfElements + 1) {
      const selectedObject = this.getRandomObject();
      if (!addedObjects[selectedObject]) {
        addedObjects[selectedObject] = true;
        listOfElements.push(new Element(min + (listOfElements.length), selectedObject, false));
      }
    }

    return listOfElements;
  }

}
