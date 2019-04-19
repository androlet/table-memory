import {Component, Input, OnInit} from '@angular/core';
import {Card, CardSuit} from '../../models/card';

@Component({
  selector: 'app-card-subtitute',
  templateUrl: './card-subtitute.component.html',
  styleUrls: ['./card-subtitute.component.less']
})
export class CardSubtituteComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

  getSuitClass(): string {
    switch (this.card.suit) {
      case CardSuit.CLUBS:
        return 'club';
      case CardSuit.DIAMONDS:
        return 'diamond';
      case CardSuit.HEARTS:
        return 'heart';
      case CardSuit.PEAKS:
        return 'peak';
      default:
        return '';
    }
  }

}
