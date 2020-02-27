import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RandomService } from './services/random.service';
import { ListsManagerComponent } from './components/lists-manager/lists-manager.component';
import { RandomReaderComponent } from './components/random-reader/random-reader.component';
import { ElementComponent } from './components/element/element.component';
import { ElementService } from './services/element.service';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, ListsManagerComponent, RandomReaderComponent, ElementComponent],
      providers: [ElementService, RandomService],
      imports: [FormsModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
