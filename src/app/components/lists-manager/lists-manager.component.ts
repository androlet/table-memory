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

  constructor(private elementService: ElementService) {

  }

  ngOnInit() {
    this.numberElements = 40;
    this.loadElements();
  }

  loadElements(): void {
    this.elements = this.elementService.getElementsStore();
  }

  getElements(): Element[] {
    return this.elements;
  }

  hideElements(): void {
    this.elements.forEach(element => element.isVisible = false);
  }

  displayElements(): void {
    this.elements.forEach(element => element.isVisible = true);
  }

  hasAllElementsDisplayed() {
    return this.elements.every(element => element.isVisible);
  }

  hasAllElementsHidden() {
    return this.elements.every(element => !element.isVisible);
  }
}
