import { TestBed, inject } from '@angular/core/testing';

import { ApiBranchService } from './api-branch.service';

describe('ApiBranchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiBranchService]
    });
  });

  it('should be created', inject([ApiBranchService], (service: ApiBranchService) => {
    expect(service).toBeTruthy();
  }));
});
