import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Md5HashService } from '../md5-hash.service';
import {UserIdModel} from '../../model/user-id.model';

@Injectable()
export class ApiNavbarService {

  private navbarListURL = environment.apiUrl + '/general/menu';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  navbarList(userIdModel: UserIdModel) {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.navbarListURL, userIdModel, {headers: new HttpHeaders().set('QA-CHECK', md5)});
  }

}
