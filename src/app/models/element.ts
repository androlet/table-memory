export class Element {

  label: string;
  answer: string;
  isVisible: boolean;

  constructor(label: string, isVisible: boolean) {
    this.label = label;
    this.isVisible = isVisible;
  }
}
