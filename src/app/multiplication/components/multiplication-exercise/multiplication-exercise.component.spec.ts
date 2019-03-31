import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationExerciseComponent } from './multiplication-exercise.component';

describe('MultiplicationExerciseComponent', () => {
  let component: MultiplicationExerciseComponent;
  let fixture: ComponentFixture<MultiplicationExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplicationExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicationExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
