import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {DrugQueryModel} from "../../model/test-unit/drug-query.model";
import {Md5HashService} from "../md5-hash.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ApiHcDrugpageService {

  private drugPageURL = environment.apiUrl + '/test/hc/drugpage';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  drugPage() {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.get(this.drugPageURL, {headers: new HttpHeaders().set('QA-CHECK', md5)});
  }

}
