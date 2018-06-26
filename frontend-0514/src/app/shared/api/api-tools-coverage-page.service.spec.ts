import { TestBed, inject } from '@angular/core/testing';

import { ApiToolsCoveragePageService } from './api-tools-coverage-page.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiToolsCoveragePageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiToolsCoveragePageService
      ]
    });
  });

  it('should be created', inject([ApiToolsCoveragePageService], (service: ApiToolsCoveragePageService) => {
    expect(service).toBeTruthy();
  }));
});
