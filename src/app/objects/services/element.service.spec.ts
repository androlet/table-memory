import { TestBed, inject } from '@angular/core/testing';

import { ElementService } from './element.service';
import {RandomService} from '../../services/random.service';

describe('ElementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElementService, RandomService]
    });
  });

  it('should be created', inject([ElementService], (service: ElementService) => {
    expect(service).toBeTruthy();
  }));
});
