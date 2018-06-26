import { Injectable } from '@angular/core';
import {DrugQueryModel} from "../../model/test-unit/drug-query.model";
import {environment} from "../../../environments/environment";
import {Md5HashService} from "../md5-hash.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ApiMmhDrugpageService {

  private drugPageURL = environment.apiUrl + '/test/mmh/drugpage';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  drugPage(drugPostModel: DrugQueryModel) {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.drugPageURL, drugPostModel, {headers: new HttpHeaders().set('QA-CHECK', md5)});
  }

}
