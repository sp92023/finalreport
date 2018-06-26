import { TestBed, inject } from '@angular/core/testing';

import { ApiModifyService } from './api-modify.service';

describe('ApiModifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiModifyService]
    });
  });

  it('should be created', inject([ApiModifyService], (service: ApiModifyService) => {
    expect(service).toBeTruthy();
  }));
});
