import {Routes} from '@angular/router';
import {MultiplicationExerciseComponent} from "./components/multiplication-exercise/multiplication-exercise.component";

export const multiplicationsRoutes: Routes = [
  { path: 'random-multiplications', component: MultiplicationExerciseComponent }
];
