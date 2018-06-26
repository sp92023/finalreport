import { TestBed, inject } from '@angular/core/testing';

import { ApiHcQueryDrugService } from './api-hc-query-drug.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiHcQueryDrugService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiHcQueryDrugService
      ]
    });
  });

  it('should be created', inject([ApiHcQueryDrugService], (service: ApiHcQueryDrugService) => {
    expect(service).toBeTruthy();
  }));
});
