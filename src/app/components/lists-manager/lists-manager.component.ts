import { Component, OnInit } from '@angular/core';
import {ElementService} from '../../services/element.service';
import {Element} from '../../models/element';

@Component({
  selector: 'app-lists-manager',
  templateUrl: './lists-manager.component.html',
  styleUrls: ['./lists-manager.component.css']
})
export class ListsManagerComponent implements OnInit {

  private elements: Element[];

  private elementsRead: Element[] = [];

  numberElements: number;

  constructor(private elementService: ElementService) {

  }

  ngOnInit() {
    this.numberElements = 40;
    this.loadElements();
  }

  loadElements(): void {
    this.elements = this.elementService.getElementsStore(this.numberElements);
  }

  getElements(): Element[] {
    return this.elements;
  }

  hideElements(): void {
    this.elements.forEach(element => element.hide());
  }

  displayElements(): void {
    this.elements.forEach(element => element.display());
  }

  hasAllElementsDisplayed() {
    return this.elements.every(element => element.isVisible);
  }

  hasAllElementsHidden() {
    return this.elements.every(element => !element.isVisible);
  }

  isReaderDisplayed(): boolean {
    return this.elementsRead.length > 0;
  }

  startReading(): void {
    this.elementsRead = JSON.parse(JSON.stringify(this.elements));
  }

  getElementsRead(): Element[] {
    return this.elementsRead;
  }
}
