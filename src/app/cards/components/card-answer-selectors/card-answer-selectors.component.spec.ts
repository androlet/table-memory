import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnswerSelectorsComponent } from './card-answer-selectors.component';

describe('CardAnswerSelectorsComponent', () => {
  let component: CardAnswerSelectorsComponent;
  let fixture: ComponentFixture<CardAnswerSelectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAnswerSelectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAnswerSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
