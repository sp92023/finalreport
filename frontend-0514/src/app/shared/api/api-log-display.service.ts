import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Md5HashService} from "../md5-hash.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LogMessageModel} from "../../model/log-message.model";

@Injectable()
export class ApiLogDisplayService {

  private displayLogURL = environment.apiUrl + '/general/displaylog';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  displayLog(message: string) {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    const postMessage = new LogMessageModel(message);
    return this.http.post(this.displayLogURL, postMessage, {headers: new HttpHeaders().set('QA-CHECK', md5)});
  }

}
