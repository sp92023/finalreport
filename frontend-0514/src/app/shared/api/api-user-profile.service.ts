import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EmailModel } from '../../model/email.model';
import { environment } from '../../../environments/environment';
import { Md5HashService } from '../md5-hash.service';

@Injectable()
export class ApiUserProfileService {

  private userInfoURL = environment.apiUrl + '/general/users/info';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  getUserInfo(emailModel: EmailModel) {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.userInfoURL, emailModel, {headers: new HttpHeaders().set('QA-CHECK', md5)});
  }
}
