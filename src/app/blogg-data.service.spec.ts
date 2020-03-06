import { TestBed } from '@angular/core/testing';

import { BloggDataService } from './blogg-data.service';

describe('BloggDataService', () => {
  let service: BloggDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloggDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
