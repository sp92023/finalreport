import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Md5HashService} from "../md5-hash.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserIdModel} from "../../model/user-id.model";
import {LogMessageModel} from "../../model/log-message.model";
import {UserProfileService} from "../user-profile.service";
import {UserModel} from "../../model/user.model";

@Injectable()
export class ApiLogWriteService {

  private userModel: UserModel;
  private writeLogURL = environment.apiUrl + '/general/writelog';

  constructor(
    private http: HttpClient,
    private md5HashService: Md5HashService,
    private userProfileService: UserProfileService
  ) {
    this.userProfileService.currentUser.subscribe((userModel) => {
      this.userModel = userModel;
      }
    )
  }

  writeLog(message: string) {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    const postMessage = new LogMessageModel('[Frontend] ' + this.userModel.username + ' | ' + message);
    this.http.post(this.writeLogURL, postMessage, {headers: new HttpHeaders().set('QA-CHECK', md5)}).subscribe(
      data => {
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
