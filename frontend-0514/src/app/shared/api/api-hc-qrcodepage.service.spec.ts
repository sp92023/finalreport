import { TestBed, inject } from '@angular/core/testing';

import { ApiHcQrcodepageService } from './api-hc-qrcodepage.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiHcQrcodepageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiHcQrcodepageService
      ]
    });
  });

  it('should be created', inject([ApiHcQrcodepageService], (service: ApiHcQrcodepageService) => {
    expect(service).toBeTruthy();
  }));
});
