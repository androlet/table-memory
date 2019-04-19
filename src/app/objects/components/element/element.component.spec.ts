import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementComponent } from './element.component';
import {Element} from '../../models/element';

describe('ElementComponent', () => {
  let component: ElementComponent;
  let fixture: ComponentFixture<ElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.element = new Element(1, 'peach', false);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
