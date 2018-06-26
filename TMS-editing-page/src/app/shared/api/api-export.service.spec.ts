import { TestBed, inject } from '@angular/core/testing';

import { ApiExportService } from './api-export.service';

describe('ApiExportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiExportService]
    });
  });

  it('should be created', inject([ApiExportService], (service: ApiExportService) => {
    expect(service).toBeTruthy();
  }));
});
