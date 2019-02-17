import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card, CardAnswerSelector, CardAnswerSelectorState} from '../../models/card';

@Component({
  selector: 'app-card-answer-selector',
  templateUrl: './card-answer-selector.component.html',
  styleUrls: ['./card-answer-selector.component.less']
})
export class CardAnswerSelectorComponent implements OnInit {

  @Input() cardAnswerSelector: CardAnswerSelector;
  card: Card;

  constructor() { }

  ngOnInit() {
    this.card = this.cardAnswerSelector.card;
  }

  isAnswerValidated(): boolean {
    return this.cardAnswerSelector.state === CardAnswerSelectorState.RIGHT;
  }

  isAnswerWrong(): boolean {
    return this.cardAnswerSelector.state === CardAnswerSelectorState.WRONG;
  }

}
