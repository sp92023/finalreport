import { TestBed, inject } from '@angular/core/testing';

import { ApiMmhQueryDrugService } from './api-mmh-query-drug.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiMmhQueryDrugService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiMmhQueryDrugService
      ]
    });
  });

  it('should be created', inject([ApiMmhQueryDrugService], (service: ApiMmhQueryDrugService) => {
    expect(service).toBeTruthy();
  }));
});
