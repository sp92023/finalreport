import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Md5HashService} from "../md5-hash.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserForAdminModel} from "../../model/admin/user-for-admin.model";

@Injectable()
export class ApiUsergroupListService {

  private usergroupListURL = environment.apiUrl + '/admin/usergroup/list';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  usergroupList(userForAdminModel: UserForAdminModel) {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.usergroupListURL, userForAdminModel, {headers: new HttpHeaders().set('QA-CHECK', md5)});
  }

}
