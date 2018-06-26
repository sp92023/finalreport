import { TestBed, inject } from '@angular/core/testing';

import { ApiMmhDrugpageService } from './api-mmh-drugpage.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiMmhDrugpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiMmhDrugpageService
      ]
    });
  });

  it('should be created', inject([ApiMmhDrugpageService], (service: ApiMmhDrugpageService) => {
    expect(service).toBeTruthy();
  }));
});
