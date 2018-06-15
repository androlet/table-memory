export class Element {

  number: number;
  label: string;
  answer: string;
  isVisible: boolean;

  constructor(number: number, label: string, isVisible: boolean) {
    this.number = number;
    this.label = label;
    this.isVisible = isVisible;
  }

  display(): void {
    this.isVisible = true;
  }

  hide(): void {
    this.isVisible = false;
  }
}
