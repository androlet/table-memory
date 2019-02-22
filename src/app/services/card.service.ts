import {Injectable} from '@angular/core';
import {Card, CardSuit, CardValue} from '../models/card';
import {RandomService} from './random.service';

@Injectable()
export class CardService {

  private cardsStandardOrder: Card[] = [];

  constructor(private randomService: RandomService) {
    this.buildStandardDeck();
  }

  private buildStandardDeck() {
    Object.keys(CardSuit).forEach(suit =>
      Object.keys(CardValue).forEach(value => {
        this.cardsStandardOrder.push({suit: CardSuit[suit], value: CardValue[value]});
      })
    );
    this.cardsStandardOrder = this.cardsStandardOrder.slice(0, 5);
  }

  getStandardDeck(): Card[] {
    const deck = [];
    this.cardsStandardOrder.forEach(card => deck.push(card));
    return deck;
  }

  getShuffledDeck(): Card[] {
    const shuffledDeck = [];
    const standardDeck = this.getStandardDeck();
    while (standardDeck.length > 0) {
      const selectedCardIndex = this.randomService.getRandomNumber(standardDeck.length);
      shuffledDeck.push(standardDeck.splice(selectedCardIndex, 1)[0]);
    }
    return shuffledDeck;
  }
}
