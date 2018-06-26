import { TestBed, inject } from '@angular/core/testing';

import { ApiAssetModifyService } from './api-asset-modify.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiAssetModifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiAssetModifyService
      ]
    });
  });

  it('should be created', inject([ApiAssetModifyService], (service: ApiAssetModifyService) => {
    expect(service).toBeTruthy();
  }));
});
