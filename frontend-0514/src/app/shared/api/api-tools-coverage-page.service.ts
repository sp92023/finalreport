import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Md5HashService} from "../md5-hash.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ApiToolsCoveragePageService {

  private pageItemURL = environment.apiUrl + '/tools/coveragepage';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  pageItem() {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.get(this.pageItemURL, {headers: new HttpHeaders().set('QA-CHECK', md5)});
  }
}
