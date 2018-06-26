import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from "rxjs/internal/operators";

import { Md5HashService } from '../md5-hash.service';
import { environment } from "../../../environments/environment";
import { HandleHttpErrorService } from "../handle-http-error.service";

export class PermitRequestModel {
  account_email: string;

  constructor(account_email: string) {
    this.account_email = account_email;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiPermitService {

  private apiUrl = environment.apiUrl + '/permit';

  constructor(
    private http: HttpClient,
    private md5HashService: Md5HashService,
    private handleHttpErrorService: HandleHttpErrorService
  ) { }

  httpPost(account_email: string) {
    const date = new Date();
    const md5 = this.md5HashService.hash(Math.floor(date.getTime() / 1000).toString());
    return this.http.post(
      this.apiUrl,
      new PermitRequestModel(account_email),
      {headers: new HttpHeaders().set('SECURITY-CHECK', md5)})
      .pipe(catchError(this.handleHttpErrorService.handleError));
  }
}
