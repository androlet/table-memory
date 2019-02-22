export class CardsSolution {
  private answers: Card[];

  constructor(answers: Card[]) {
    this.answers = answers;
  }

  private getExpectedCard(): Card {
    return this.answers[0];
  }

  isExpectedCard(answer: Card): boolean {
    const rightAnswer = this.getExpectedCard();
    return rightAnswer.suit === answer.suit && rightAnswer.value === answer.value;
  }

  next(): void {
    this.answers.shift();
  }
}

export class CardAnswerSelector {
  card: Card;
  state: CardAnswerSelectorState;

  constructor(card: Card) {
    this.card = card;
    this.state = CardAnswerSelectorState.NONE;
  }

  isNotSelected(): boolean {
    return this.state === CardAnswerSelectorState.NONE;
  }

  isCorrect(): boolean {
    return this.state === CardAnswerSelectorState.RIGHT;
  }

  isWrong(): boolean {
    return this.state === CardAnswerSelectorState.WRONG;
  }

  validate(): void {
    this.state = CardAnswerSelectorState.RIGHT;
  }

  unvalidate(): void {
    this.state = CardAnswerSelectorState.WRONG;
  }

  reset(): void {
    this.state = CardAnswerSelectorState.NONE;
  }
}

enum CardAnswerSelectorState {
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
