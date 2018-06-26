import { TestBed, inject } from '@angular/core/testing';

import { ApiAssetUpdateService } from './api-asset-update.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiAssetUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiAssetUpdateService
      ]
    });
  });

  it('should be created', inject([ApiAssetUpdateService], (service: ApiAssetUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
