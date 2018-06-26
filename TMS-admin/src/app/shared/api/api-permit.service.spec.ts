import { TestBed, inject } from '@angular/core/testing';

import { ApiPermitService } from './api-permit.service';

describe('ApiPermitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiPermitService]
    });
  });

  it('should be created', inject([ApiPermitService], (service: ApiPermitService) => {
    expect(service).toBeTruthy();
  }));
});
