import { TestBed, inject } from '@angular/core/testing';

import { HandleHttpErrorService } from './handle-http-error.service';

describe('HandleHttpErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandleHttpErrorService]
    });
  });

  it('should be created', inject([HandleHttpErrorService], (service: HandleHttpErrorService) => {
    expect(service).toBeTruthy();
  }));
});
