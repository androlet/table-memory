import {Component, OnInit} from '@angular/core';
import {MultiplicationConfigService} from '../../services/multiplication-config.service';

@Component({
  selector: 'app-multiplication-exercise',
  templateUrl: './multiplication-exercise.component.html',
  styleUrls: ['./multiplication-exercise.component.css']
})
export class MultiplicationExerciseComponent implements OnInit {

  primaryFactor: number;
  secondaryFactor: number;

  isSolutionDisplayed = false;

  selectedAnswer = 0;

  constructor(private multiplicationConfigService: MultiplicationConfigService) {}

  ngOnInit() {
    this.setUpMultiplication();
  }

  toggleSolutionDisplay(): void {
    this.isSolutionDisplayed = !this.isSolutionDisplayed;
  }

  onSelectedAnswerChanged(value: number) {
    this.selectedAnswer = value;
    this.checkAnswer();
  }

  isAnswerCorrect(): boolean {
    return this.getCorrectAnswer() === this.selectedAnswer;
  }

  isAnswerWrong(): boolean {
    return !this.isAnswerCorrect();
  }

  getCorrectAnswer(): number {
    return this.primaryFactor * this.secondaryFactor;
  }

  checkTypedAnswer(typedNumber: number): void {
    this.selectedAnswer = typedNumber;
    this.checkAnswer();
  }

  manageTypeChanges(): void {
    if (this.selectedAnswer !== 0 && !this.selectedAnswer) {
      this.resetAnswer();
    } else {
      this.checkAnswer();
    }
  }

  private checkAnswer(): void {
    if (this.isAnswerCorrect()) {
      this.validate();
    }
  }

  private resetAnswer(): void {
    this.selectedAnswer = 0;
  }

  private setUpMultiplication(): void {
    this.primaryFactor = this.multiplicationConfigService.getPrimaryFactor();
    this.secondaryFactor = this.multiplicationConfigService.getSecondaryFactor();
  }

  private validate(): void {
    const millisecondsBySecond = 1000;
    window.setTimeout(() => {
      this.nextExercise();
    }, this.multiplicationConfigService.validationDuration * millisecondsBySecond);
  }

  nextExercise() {
    this.isSolutionDisplayed = false;
    this.resetAnswer();
    this.setUpMultiplication();
  }

}
