import { TestBed, inject } from '@angular/core/testing';

import { ApiCreateService } from './api-create.service';

describe('ApiCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiCreateService]
    });
  });

  it('should be created', inject([ApiCreateService], (service: ApiCreateService) => {
    expect(service).toBeTruthy();
  }));
});
