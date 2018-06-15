import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomReaderComponent } from './random-reader.component';

describe('RandomReaderComponent', () => {
  let component: RandomReaderComponent;
  let fixture: ComponentFixture<RandomReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
