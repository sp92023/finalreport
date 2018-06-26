import { TestBed, inject } from '@angular/core/testing';

import { ApiClockListService } from './api-clock-list.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiClockListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiClockListService
      ]
    });
  });

  it('should be created', inject([ApiClockListService], (service: ApiClockListService) => {
    expect(service).toBeTruthy();
  }));
});
