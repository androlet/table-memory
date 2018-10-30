import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {RandomService} from '../../services/random.service';
import {Element} from '../../models/element';

@Component({
  selector: 'app-random-reader',
  templateUrl: './random-reader.component.html',
  styleUrls: ['./random-reader.component.css']
})
export class RandomReaderComponent implements OnChanges {

  @Input() private elements: Element[];
  @Output() private readerClosing = new EventEmitter();
  private elementsRead: Element[];

  elementRead: Element;
  private indexElement: number;

  constructor(private randomService: RandomService) { }

  ngOnChanges() {
    this.elementsRead = Array.from(this.elements);
    this.readRandomElement();
  }

  readNextRandomElement(): void {
    this.elementsRead.splice(this.indexElement, 1);
    if (this.elementsRead.length <= 0) {
      this.readerClosing.emit({hasBeenRead: true});
    } else {
      this.readRandomElement();
    }
  }

  private readRandomElement(): void {
    this.indexElement = this.randomService.getRandomNumber(this.elementsRead.length);
    this.elementRead = this.elementsRead[this.indexElement];
  }
}
