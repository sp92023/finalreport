import { TestBed, inject } from '@angular/core/testing';

import { ApiUsergroupListService } from './api-usergroup-list.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiUsergroupListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiUsergroupListService
      ]
    });
  });

  it('should be created', inject([ApiUsergroupListService], (service: ApiUsergroupListService) => {
    expect(service).toBeTruthy();
  }));
});
