import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomReaderComponent } from './random-reader.component';
import {Component, ViewChild} from '@angular/core';
import {By} from '@angular/platform-browser';
import {Element} from '../../models/element';
import {RandomService} from '../../../services/random.service';

describe('RandomReaderComponent', () => {

  let fixture: ComponentFixture<HostComponent>;
  let hostComponent: HostComponent;
  let component: RandomReaderComponent;

  @Component({
    template: '<app-random-reader #testedComponent [elements]="elements" (readerClosing)="closeReaderEvent = $event"></app-random-reader>'
  })
  class HostComponent {
    elements: Element[];
    closeReaderEvent: any;
    @ViewChild('testedComponent') testedComponent;
    setElement(elements: Element[]) {
      this.elements = elements;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HostComponent,
        RandomReaderComponent
      ],
      providers: [RandomService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    component = hostComponent.testedComponent;
  });

  it('should create and dislay first element', () => {
    //Given
    const expectedElement = new Element(1, 'peach', false);
    hostComponent.setElement([expectedElement]);

    //When
    fixture.detectChanges();

    //Then
    expect(hostComponent).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.number-element')).nativeElement.innerHTML)
      .toBe('1');
    expect(fixture.debugElement.query(By.css('.label-element')).nativeElement.innerHTML)
      .toBe(expectedElement.label);
  });

  it('should read randomly the list of elements', () => {
    //Given
    hostComponent.setElement([
      new Element(1, 'peach', false),
      new Element(2, 'ball', false)
    ]);

    //When
    fixture.detectChanges();
    const firstElementRead = component.elementRead;
    component.readNextRandomElement();

    //Then
    expect(component.elementRead).not.toBe(firstElementRead);
  });

  it('should close the reader when all elements has been read', () => {
    //Given
    hostComponent.setElement([
      new Element(1, 'peach', false)
    ]);

    //When
    fixture.detectChanges();
    component.readNextRandomElement();

    //Then
    expect(hostComponent.closeReaderEvent.hasBeenRead).toBe(true);
  });
});
