import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplicationExerciseComponent } from './components/multiplication-exercise/multiplication-exercise.component';
import {FormsModule} from '@angular/forms';
import {MultiplicationConfigService} from './services/multiplication-config.service';
import {RandomService} from '../services/random.service';
import { NumberInputComponent } from './components/number-input/number-input.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [MultiplicationExerciseComponent, NumberInputComponent],
  providers: [MultiplicationConfigService, RandomService],
  exports: [MultiplicationExerciseComponent]
})
export class MultiplicationsModule { }
