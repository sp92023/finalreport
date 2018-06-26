import { TestBed, inject } from '@angular/core/testing';

import { ApiQueryService } from './api-query.service';

describe('ApiQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiQueryService]
    });
  });

  it('should be created', inject([ApiQueryService], (service: ApiQueryService) => {
    expect(service).toBeTruthy();
  }));
});
