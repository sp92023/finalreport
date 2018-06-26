import { TestBed, inject } from '@angular/core/testing';

import { ApiNavbarService } from './api-navbar.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiNavbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiNavbarService
      ]
    });
  });

  it('should be created', inject([ApiNavbarService], (service: ApiNavbarService) => {
    expect(service).toBeTruthy();
  }));
});
