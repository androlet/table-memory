import { Injectable } from '@angular/core';
import {Element} from '../models/element';
import {OBJECTS} from '../data/objects';

@Injectable()
export class ElementService {

  private objects: string[] = OBJECTS;

  constructor() {}

  private getRandomObject(): string {
    return this.objects[Math.floor(Math.random() * this.objects.length)];
  }

  getElementsStore(numberOfElements): Element[] {
    const listOfElements: Element[] = [];
    const addedObjects = {};
    let counter = 0;
    while (counter < numberOfElements) {
      const selectedObject = this.getRandomObject();
      if (!addedObjects[selectedObject]) {
        addedObjects[selectedObject] = true;
        listOfElements.push(new Element(selectedObject, false));
        counter++;
      }
    }

    return listOfElements;
  }

}
