import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Md5HashService} from "../md5-hash.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DrugDetailPostModel} from "../../model/test-unit/drug-detail-post.model";

@Injectable()
export class ApiHcQueryDrugService {

  private drugDetailURL = environment.apiUrl + '/test/hc/querydrugdetail';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  drugDetail(drugQuery: DrugDetailPostModel) {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.drugDetailURL, drugQuery, {headers: new HttpHeaders().set('QA-CHECK', md5)});
  }

}
