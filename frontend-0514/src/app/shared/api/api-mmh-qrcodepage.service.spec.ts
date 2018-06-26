import { TestBed, inject } from '@angular/core/testing';

import { ApiMmhQrcodepageService } from './api-mmh-qrcodepage.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiMmhQrcodepageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiMmhQrcodepageService
      ]
    });
  });

  it('should be created', inject([ApiMmhQrcodepageService], (service: ApiMmhQrcodepageService) => {
    expect(service).toBeTruthy();
  }));
});
