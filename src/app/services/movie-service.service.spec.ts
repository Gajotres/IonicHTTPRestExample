import { TestBed } from '@angular/core/testing';

import { MovieServiceService } from './movie-service.service';

describe('MovieServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieServiceService = TestBed.get(MovieServiceService);
    expect(service).toBeTruthy();
  });
});
