import { TestBed, inject } from '@angular/core/testing';

import { ApiDashboardService } from './api-dashboard.service';

describe('ApiDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiDashboardService]
    });
  });

  it('should be created', inject([ApiDashboardService], (service: ApiDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
