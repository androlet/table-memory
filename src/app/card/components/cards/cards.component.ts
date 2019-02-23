import {Component, OnInit} from '@angular/core';
import {Card, CardsSolution} from '../../models/card';
import {CardService} from '../../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  shuffledDeck: Card[];
  solution: CardsSolution;
  private isRestituing: boolean;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.reset();
  }

  reset(): void {
    this.shuffledDeck = this.cardService.getShuffledDeck();
    this.solution = new CardsSolution(this.shuffledDeck);
    this.isRestituing = false;
  }

  isReaderHidden(): boolean {
    return this.isRestituing;
  }

  isRestitutionInterfaceHidden(): boolean {
    return !this.isRestituing;
  }

  startReading(): void {
    this.isRestituing = false;
  }

  displayRestitutionInterface(): void {
    this.isRestituing = true;
  }

  isReaderDisplayed(): boolean {
    return !this.isRestituing;
  }

  isRestitutionInterfaceDisplayed(): boolean {
    return this.isRestituing;
  }
}
