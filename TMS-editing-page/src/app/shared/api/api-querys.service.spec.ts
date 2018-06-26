import { TestBed, inject } from '@angular/core/testing';

import { ApiQuerysService } from './api-querys.service';

describe('ApiQuerysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiQuerysService]
    });
  });

  it('should be created', inject([ApiQuerysService], (service: ApiQuerysService) => {
    expect(service).toBeTruthy();
  }));
});
