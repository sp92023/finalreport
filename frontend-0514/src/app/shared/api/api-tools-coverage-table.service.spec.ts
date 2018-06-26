import { TestBed, inject } from '@angular/core/testing';

import { ApiToolsCoverageTableService } from './api-tools-coverage-table.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiToolsCoverageTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiToolsCoverageTableService
      ]
    });
  });

  it('should be created', inject([ApiToolsCoverageTableService], (service: ApiToolsCoverageTableService) => {
    expect(service).toBeTruthy();
  }));
});
