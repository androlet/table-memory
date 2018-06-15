import {Component, Input, OnInit} from '@angular/core';
import {RandomService} from '../../services/random.service';
import {Element} from '../../models/element';

@Component({
  selector: 'app-random-reader',
  templateUrl: './random-reader.component.html',
  styleUrls: ['./random-reader.component.css']
})
export class RandomReaderComponent implements OnInit {

  @Input('elements') private elementsRead: Element[];

  private indexElement: number;

  constructor(private randomService: RandomService) { }

  ngOnInit() {
    this.readRandomElement();
  }

  getCurrentElementNumber(): number {
    return this.elementsRead[this.indexElement].number;
  }

  getCurrentElementLabel(): string {
    return this.elementsRead[this.indexElement].label;
  }

  readNextRandomElement(): void {
    this.elementsRead.splice(this.indexElement, 1);
    this.readRandomElement();
  }

  private readRandomElement(): void {
    this.indexElement = this.randomService.getRandomNumber(this.elementsRead.length);
  }
}
