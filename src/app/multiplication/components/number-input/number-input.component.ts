import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {

  private typeLimit = 9;
  @Input() typedNumber: number;
  @Output() typedNumberChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  private processAtTyping(): void {
    this.typedNumberChange.emit(this.typedNumber);
  }

  isAtMaxSizeTyping(): boolean {
    return this.typedNumber.toString().length >= this.typeLimit;
  }

  typeNumber(number: number): void {
    if (!this.isAtMaxSizeTyping()) {
      this.typedNumber = this.stringToNumber(this.typedNumber + number.toString());
    }
    this.processAtTyping();
  }

  backspace(): void {
    const length = this.typedNumber.toString().length;
    if (length === 1) {
      this.typedNumber = 0;
    } else {
      this.typedNumber = this.stringToNumber(this.typedNumber.toString().substring(0, length - 1));
    }
    this.processAtTyping();
  }

  private stringToNumber(number: string) {
    return parseInt(number, 10);
  }

}
