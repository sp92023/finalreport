import { TestBed, inject } from '@angular/core/testing';

import { ApiLogDisplayService } from './api-log-display.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiLogDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiLogDisplayService
      ]
    });
  });

  it('should be created', inject([ApiLogDisplayService], (service: ApiLogDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
