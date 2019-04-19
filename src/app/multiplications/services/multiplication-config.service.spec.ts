import { TestBed, inject } from '@angular/core/testing';

import { MultiplicationConfigService } from './multiplication-config.service';

describe('MultiplicationConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiplicationConfigService]
    });
  });

  it('should be created', inject([MultiplicationConfigService], (service: MultiplicationConfigService) => {
    expect(service).toBeTruthy();
  }));
});
