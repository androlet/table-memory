import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsManagerComponent } from './lists-manager.component';
import { ElementService } from '../../services/element.service';
import { RandomService } from '../../services/random.service';
import { FormsModule } from '@angular/forms';
import { RandomReaderComponent } from '../random-reader/random-reader.component';
import { ElementComponent } from '../element/element.component';

describe('ListsManagerComponent', () => {
  let component: ListsManagerComponent;
  let fixture: ComponentFixture<ListsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsManagerComponent, RandomReaderComponent, ElementComponent],
      providers: [ElementService, RandomService],
      imports: [FormsModule]
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
});
