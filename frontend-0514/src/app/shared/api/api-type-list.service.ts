import { Injectable } from '@angular/core';
import {Md5HashService} from '../md5-hash.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class ApiTypeListService {

  private typeListURL = environment.apiUrl + '/am/type';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  typeList() {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.get(this.typeListURL, {headers: new HttpHeaders().set('QA-CHECK', md5)});
  }

}
