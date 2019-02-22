import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubtituteComponent } from './card-subtitute.component';

describe('CardSubtituteComponent', () => {
  let component: CardSubtituteComponent;
  let fixture: ComponentFixture<CardSubtituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSubtituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSubtituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
