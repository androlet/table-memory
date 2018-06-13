import { Injectable } from '@angular/core';
import {Element} from '../models/element';
import {OBJECTS} from '../data/objects';

@Injectable()
export class ElementService {

  private objects: string[] = OBJECTS;

  private elements: Element[];

  constructor() {}

  private getRandomElement(isVisible: boolean) {
    const index = Math.floor(Math.random() * this.objects.length);
    return new Element(this.objects[index], isVisible);
  }

  getElementsStore(numberOfElements): Element[] {
    const list: Element[] = [];
    while (list.length < numberOfElements) {
      list.push(this.getRandomElement(false));
    }
    return list;
  }

}
