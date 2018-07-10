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
    return 1;
  }

  getMaximumSizeAllowed(): number {
    return this.objects.length;
  }

  getElementsStore(numberOfElements): Element[] {
    const listOfElements: Element[] = [];
    const addedObjects = {};
    while (listOfElements.length < numberOfElements) {
      const selectedObject = this.getRandomObject();
      if (!addedObjects[selectedObject]) {
        addedObjects[selectedObject] = true;
        listOfElements.push(new Element((listOfElements.length) + 1, selectedObject, false));
      }
    }

    return listOfElements;
  }

}
