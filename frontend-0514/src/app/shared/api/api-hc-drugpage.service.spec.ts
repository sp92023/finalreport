import { TestBed, inject } from '@angular/core/testing';

import { ApiHcDrugpageService } from './api-hc-drugpage.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiHcDrugpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiHcDrugpageService
      ]
    });
  });

  it('should be created', inject([ApiHcDrugpageService], (service: ApiHcDrugpageService) => {
    expect(service).toBeTruthy();
  }));
});
