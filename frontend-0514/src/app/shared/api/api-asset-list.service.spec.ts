import { TestBed, inject } from '@angular/core/testing';

import { ApiAssetListService } from './api-asset-list.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiAssetListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiAssetListService
      ]
    });
  });

  it('should be created', inject([ApiAssetListService], (service: ApiAssetListService) => {
    expect(service).toBeTruthy();
  }));
});
