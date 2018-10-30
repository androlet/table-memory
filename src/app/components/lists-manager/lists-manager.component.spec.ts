import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { ListsManagerComponent } from './lists-manager.component';
import {RandomReaderComponent} from '../random-reader/random-reader.component';
import {ElementComponent} from '../element/element.component';
import {FormsModule} from '@angular/forms';
import {ElementService} from '../../services/element.service';
import {Element} from '../../models/element';
import {RandomService} from '../../services/random.service';

describe('ListsManagerComponent', () => {
  let component: ListsManagerComponent;
  let fixture: ComponentFixture<ListsManagerComponent>;
  let elementServiceStub;

  class ElementServiceStub {

    private elementsStore: Element[] = [
      new Element(1, 'peach', false),
      new Element(2, 'ball', false)
    ];

    setElementsStore(elementsStore: Element[]) {
      this.elementsStore = elementsStore;
    }

    getElementsStore(numberOfElements: number): Element[] {
      return this.elementsStore;
    }

    getMinimumSizeAllowed(): number {
      return 1;
    }

    getMaximumSizeAllowed(): number {
      return this.elementsStore.length;
    }
  }

  beforeEach(async(() => {
    elementServiceStub = new ElementServiceStub();
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ListsManagerComponent, RandomReaderComponent, ElementComponent ],
      providers: [
        {
          provide: ElementService,
          useValue: elementServiceStub
        },
        RandomService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsManagerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display random reader', () => {
    //Given

    //When
    fixture.detectChanges();

    //Then
    expect(component.isReaderDisplayed()).toBe(true);
    expect(component.isListDisplayed()).toBe(false);
  });

  it('should display list of elements', () => {
    //Given
    fixture.detectChanges();
    elementServiceStub.getElementsStore();

    //When
    component.displayList();
    fixture.detectChanges();

    //Then
    expect(component.isReaderDisplayed()).toBe(false);
    expect(component.isListDisplayed()).toBe(true);
  });
});
