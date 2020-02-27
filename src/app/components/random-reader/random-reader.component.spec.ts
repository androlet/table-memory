import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomReaderComponent } from './random-reader.component';
import { RandomService } from '../../services/random.service';
import { Element } from '../../models/element';

describe('RandomReaderComponent', () => {
  let component: RandomReaderComponent;
  let fixture: ComponentFixture<RandomReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomReaderComponent ],
      providers: [RandomService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomReaderComponent);
    component = fixture.componentInstance;
    component.elementRead = new Element(1, 'first', false);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
