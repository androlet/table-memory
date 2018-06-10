import { Injectable } from '@angular/core';
import {Element} from '../models/element';
import {OBJECTS} from "../data/objects";

@Injectable()
export class ElementService {

  private objects: string[] = OBJECTS;

  constructor() {}

  getElementsStore(): Element[] {
    return this.objects.map((object) => new Element(object, false));
  }

}
