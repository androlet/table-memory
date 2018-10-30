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
  numberElements: number;
  private isReadingElements: boolean;

  constructor(private elementService: ElementService) {

  }

  ngOnInit() {
    this.numberElements = 40;
    this.loadElements();
    this.startReading();
  }

  private applyNumberElementsConstraints() {
    const maxSize = this.elementService.getMaximumSizeAllowed();
    const minSize = this.elementService.getMinimumSizeAllowed();
    if (this.numberElements > maxSize) {
      this.numberElements = maxSize;
    } else if (this.numberElements < minSize) {
      this.numberElements = minSize;
    }
  }

  loadElements(): void {
    this.applyNumberElementsConstraints();
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

  displayList() {
    this.isReadingElements = false;
  }

  isReaderDisplayed(): boolean {
    return this.isReadingElements;
  }

  isListDisplayed(): boolean {
    return !this.isReadingElements;
  }

  startReading(): void {
    this.isReadingElements = true;
  }
}
