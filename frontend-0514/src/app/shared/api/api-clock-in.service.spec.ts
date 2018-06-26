import { TestBed, inject } from '@angular/core/testing';

import { ApiClockInService } from './api-clock-in.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiClockInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiClockInService
      ]
    });
  });

  it('should be created', inject([ApiClockInService], (service: ApiClockInService) => {
    expect(service).toBeTruthy();
  }));
});
