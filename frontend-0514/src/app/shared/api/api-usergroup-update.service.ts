import { Injectable } from '@angular/core';
import {UserForAdminModel} from "../../model/admin/user-for-admin.model";
import {environment} from "../../../environments/environment";
import {Md5HashService} from "../md5-hash.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserGroupModel} from "../../model/admin/user-group.model";

@Injectable()
export class ApiUsergroupUpdateService {

  private usergroupUpdateURL = environment.apiUrl + '/admin/usergroup/update';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  usergroupUpdate(userGroupModel: UserGroupModel[]) {
    console.log(userGroupModel);
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.usergroupUpdateURL, userGroupModel, {headers: new HttpHeaders().set('QA-CHECK', md5)});
  }

}
