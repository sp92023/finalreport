import { TestBed, inject } from '@angular/core/testing';

import { ApiTypeListService } from './api-type-list.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiTypeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiTypeListService
      ]
    });
  });

  it('should be created', inject([ApiTypeListService], (service: ApiTypeListService) => {
    expect(service).toBeTruthy();
  }));
});
