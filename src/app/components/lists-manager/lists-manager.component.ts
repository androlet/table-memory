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

  private elementsToRead: Element[] = [];

  numberElements: number;

  constructor(private elementService: ElementService) {

  }

  ngOnInit() {
    this.numberElements = 40;
    this.loadElements();
  }

  loadElements(): void {
    this.elements = this.elementService.getElementsStore(this.numberElements);
    this.refreshElementsToRead();
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
    this.elementsToRead = [];
  }

  isReaderDisplayed(): boolean {
    return this.elementsToRead.length > 0;
  }

  isListDisplayed(): boolean {
    return this.elementsToRead.length <= 0;
  }

  startReading(): void {
    this.refreshElementsToRead();
  }

  getElementsRead(): Element[] {
    return this.elementsToRead;
  }

  private refreshElementsToRead(): void {
    this.elementsToRead = JSON.parse(JSON.stringify(this.elements));
  }
}
