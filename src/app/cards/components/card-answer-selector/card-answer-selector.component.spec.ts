import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnswerSelectorComponent } from './card-answer-selector.component';

describe('CardAnswerSelectorComponent', () => {
  let component: CardAnswerSelectorComponent;
  let fixture: ComponentFixture<CardAnswerSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAnswerSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAnswerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
