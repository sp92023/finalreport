import { TestBed, inject } from '@angular/core/testing';

import { ApiTransferListUserService } from './api-transfer-list-user.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiTransferListUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiTransferListUserService
      ]
    });
  });

  it('should be created', inject([ApiTransferListUserService], (service: ApiTransferListUserService) => {
    expect(service).toBeTruthy();
  }));
});
