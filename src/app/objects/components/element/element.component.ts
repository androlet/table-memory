import {Component, Input, OnInit} from '@angular/core';
import {Element} from '../../models/element';

const HIDDEN_LABEL = '???';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() element: Element;

  constructor() { }

  ngOnInit() {
  }

  isShown() {
    return this.element.isVisible;
  }

  isHidden() {
    return !this.element.isVisible;
  }

  toggleVisibility(): void {
    this.element.isVisible = !this.element.isVisible;
  }

  getElementNumber() {
    return this.element.number;
  }

  getElementLabel() {
    return this.isShown() ? this.element.label : HIDDEN_LABEL;
  }

}
