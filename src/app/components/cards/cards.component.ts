import {Component, OnInit} from '@angular/core';
import {Card, CardAnswerSelector, CardAnswerSelectorState, CardSuit, CardValue} from '../../models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  selectors: CardAnswerSelector[];
  rightAnswers: Card[];

  constructor() { }

  ngOnInit() {
    this.buildAnswers();
    this.buildSelectorsDeck();
  }

  processAnswer(answer: CardAnswerSelector): void {
    const nextValidAnswer = this.rightAnswers[0];
    answer.verify(nextValidAnswer);
    if (answer.state === CardAnswerSelectorState.RIGHT) {
      this.rightAnswers.shift();
      this.resetUnvalidatedAnswer();
    }
  }

  private resetUnvalidatedAnswer() {
    this.selectors
      .filter(selector => selector.state === CardAnswerSelectorState.WRONG)
      .forEach(selector => selector.state = CardAnswerSelectorState.NONE);
  }

  private buildAnswers(): void {
    this.rightAnswers = [
      {
        value: CardValue.AS,
        suit: CardSuit.DIAMONDS
      },
      {
        value: CardValue.THREE,
        suit: CardSuit.DIAMONDS
      }
    ];
  }

  private buildSelectorsDeck(): void {
    this.selectors = [];
    Object.keys(CardSuit).forEach(suit =>
      Object.keys(CardValue).forEach(value =>
        this.selectors.push(new CardAnswerSelector({value: CardValue[value], suit: CardSuit[suit]}))
      )
    );
  }

}
