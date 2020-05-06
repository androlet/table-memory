import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {RandomService} from '../../services/random.service';
import {Element} from '../../models/element';

@Component({
  selector: 'app-random-reader',
  templateUrl: './random-reader.component.html',
  styleUrls: ['./random-reader.component.css']
})
export class RandomReaderComponent implements OnChanges {

  elementRead: Element;
  @Input('elements') private elementsToRead: Element[];
  totalElementToRead: number;
  private indexElementToRead: number;

  private elementsAlreadyRead: Element[];
  indexElementAlreadyRead: number;

  constructor(private randomService: RandomService) { }

  ngOnChanges() {
    this.elementsAlreadyRead = [];
    this.indexElementAlreadyRead = 0;
    this.totalElementToRead = this.elementsToRead.length;
    this.readRandomElement();
  }

  hasPreviousElement(): boolean {
    return this.indexElementAlreadyRead > 0;
  }

  displayNextElement(): void {
    if (this.indexElementAlreadyRead === this.elementsAlreadyRead.length - 1) {
      this.readRandomElement();
    } else {
      this.indexElementAlreadyRead++;
      this.elementRead = this.elementsAlreadyRead[this.indexElementAlreadyRead];
    }
  }

  displayPreviousElement(): void {
    if (this.hasPreviousElement()) {
      this.indexElementAlreadyRead--;
      this.elementRead = this.elementsAlreadyRead[this.indexElementAlreadyRead];
    }
  }

  onKey(event: any) {
    if (event.code === 'ArrowRight') {
      this.displayNextElement();
    } else if (event.code === 'ArrowLeft') {
      this.displayPreviousElement();
    }
  }

  private readRandomElement(): void {
    this.indexElementToRead = this.randomService.getRandomNumber(this.elementsToRead.length);
    this.elementsAlreadyRead.push(this.elementsToRead.splice(this.indexElementToRead, 1)[0]);
    this.indexElementAlreadyRead = this.elementsAlreadyRead.length - 1;
    this.elementRead = this.elementsAlreadyRead[this.indexElementAlreadyRead];
  }
}
