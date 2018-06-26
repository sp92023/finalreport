import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Md5HashService} from "../md5-hash.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CoverageTablePostModel} from "../../model/tools/test-coverage/coverage-table-post.model";

@Injectable()
export class ApiToolsCoverageTableService {

  private coverageTableURL = environment.apiUrl + '/tools/coveragetable';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  coverageTable(coverageTablePostModel: CoverageTablePostModel) {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.coverageTableURL, coverageTablePostModel, {headers: new HttpHeaders().set('QA-CHECK', md5)});
  }

}
