import { TestBed, inject } from '@angular/core/testing';

import { DrugPageItemService } from './drug-page-item.service';

describe('DrugPageItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrugPageItemService]
    });
  });

  it('should be created', inject([DrugPageItemService], (service: DrugPageItemService) => {
    expect(service).toBeTruthy();
  }));
});
