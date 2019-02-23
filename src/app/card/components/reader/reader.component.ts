import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Card} from '../../models/card';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.less']
})
export class ReaderComponent implements OnInit, OnChanges {

  @Input() private elements: Card[];
  @Output() private readerClosing = new EventEmitter();
  elementRead: Card;
  private indexElement: number;

  constructor() { }

  ngOnInit(): void {
    this.indexElement = 0;
    this.updateElementRead();
  }

  ngOnChanges() {
    this.updateElementRead();
  }

  private updateElementRead(): void {
    this.elementRead = this.elements[this.indexElement];
  }

  hasPrevious(): boolean {
    return this.indexElement > 0;
  }

  readPrevious(): void {
    if (this.indexElement > 0) {
      this.indexElement--;
      this.updateElementRead();
    }
  }

  hasNext(): boolean {
    return this.indexElement < this.elements.length - 1;
  }

  readNext(): void {
    if (this.indexElement < this.elements.length - 1) {
      this.indexElement++;
      this.updateElementRead();
    }
  }

}
