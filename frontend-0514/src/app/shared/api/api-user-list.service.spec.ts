import { TestBed, inject } from '@angular/core/testing';

import { ApiUserListService } from './api-user-list.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiUserListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiUserListService
      ]
    });
  });

  it('should be created', inject([ApiUserListService], (service: ApiUserListService) => {
    expect(service).toBeTruthy();
  }));
});
