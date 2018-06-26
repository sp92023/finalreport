import { TestBed, inject } from '@angular/core/testing';

import { ApiTransferAssetService } from './api-transfer-asset.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiTransferAssetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiTransferAssetService
      ]
    });
  });

  it('should be created', inject([ApiTransferAssetService], (service: ApiTransferAssetService) => {
    expect(service).toBeTruthy();
  }));
});
