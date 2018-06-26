import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Md5HashService} from "../md5-hash.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ApiTransferListUserService {

  private listUserURL = environment.apiUrl + '/am/transfer/listuser';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  listUser() {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.get(this.listUserURL, {headers: new HttpHeaders().set('QA-CHECK', md5)});
  }

}
