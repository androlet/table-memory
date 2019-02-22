import {Component, Input, OnInit} from '@angular/core';
import {CardAnswerSelector, CardsSolution} from '../../models/card';
import {CardService} from '../../services/card.service';

@Component({
  selector: 'app-card-answer-selectors',
  templateUrl: './card-answer-selectors.component.html',
  styleUrls: ['./card-answer-selectors.component.less']
})
export class CardAnswerSelectorsComponent implements OnInit {

  selectors: CardAnswerSelector[];
  @Input() solution: CardsSolution;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.buildSelectorsDeck();
  }

  select(answer: CardAnswerSelector) {
    if (answer.isNotSelected()) {
      this.processAnswer(answer);
    }
  }

  processAnswer(answer: CardAnswerSelector): void {
    if (this.solution.isExpectedCard(answer.card)) {
      answer.validate();
      this.resetUnvalidatedAnswer();
      this.solution.next();
    } else {
      answer.unvalidate();
    }
  }

  private resetUnvalidatedAnswer() {
    this.selectors
      .filter(selector => selector.isWrong())
      .forEach(selector => selector.reset());
  }

  private buildSelectorsDeck(): void {
    this.selectors = [];
    this.cardService.getStandardDeck().forEach(card =>
        this.selectors.push(new CardAnswerSelector(card))
    );
  }


}
