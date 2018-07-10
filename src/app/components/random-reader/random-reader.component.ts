import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {RandomService} from '../../services/random.service';
import {Element} from '../../models/element';

@Component({
  selector: 'app-random-reader',
  templateUrl: './random-reader.component.html',
  styleUrls: ['./random-reader.component.css']
})
export class RandomReaderComponent implements OnChanges {

  @Input('elements') private elementsRead: Element[];

  elementRead: Element;

  constructor(private randomService: RandomService) { }

  ngOnChanges() {
    this.readRandomElement();
  }

  readNextRandomElement(): void {
    this.elementsRead.splice(this.elementRead.number, 1);
    this.readRandomElement();
  }

  private readRandomElement(): void {
    const indexElement = this.randomService.getRandomNumber(this.elementsRead.length);
    this.elementRead = this.elementsRead[indexElement];
  }
}
