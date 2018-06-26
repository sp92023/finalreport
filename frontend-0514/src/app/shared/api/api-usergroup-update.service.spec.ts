import { TestBed, inject } from '@angular/core/testing';

import { ApiUsergroupUpdateService } from './api-usergroup-update.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';

describe('ApiUsergroupUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        ApiUsergroupUpdateService
      ]
    });
  });

  it('should be created', inject([ApiUsergroupUpdateService], (service: ApiUsergroupUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
