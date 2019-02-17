export class CardAnswerSelector {
  card: Card;
  state: CardAnswerSelectorState;

  constructor(card: Card) {
    this.card = card;
    this.state = CardAnswerSelectorState.NONE;
  }

  verify(realAnswer: Card) {
    if (this.card.suit === realAnswer.suit && this.card.value === realAnswer.value) {
      this.state = CardAnswerSelectorState.RIGHT;
    } else {
      this.state = CardAnswerSelectorState.WRONG;
    }
  }

  reset() {
    this.state = CardAnswerSelectorState.NONE;
  }
}

export enum CardAnswerSelectorState {
  RIGHT = 'RIGHT',
  WRONG = 'WRONG',
  NONE = 'NONE'
}

export interface Card {
  suit: CardSuit;
  value: CardValue;
}

export enum CardSuit {
  DIAMONDS = '♦',
  CLUBS = '♣',
  HEARTS = '♥',
  PEAKS = '♠'
}

export enum CardValue {
  AS = 'A',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  TEN = '10',
  JACK = 'J',
  QUEEN = 'Q',
  KING = 'K'
}
