import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from "rxjs/internal/operators";

import { Md5HashService } from '../md5-hash.service';
import { environment } from "../../../environments/environment";
import { HandleHttpErrorService } from "../handle-http-error.service";
import { ModifyRequestModel } from "../../model/modify/modify-request.model";

@Injectable({
  providedIn: 'root'
})
export class ApiModifyService {

  private apiUrl = environment.apiUrl + '/modify';

  constructor(
    private http: HttpClient,
    private md5HashService: Md5HashService,
    private handleHttpErrorService: HandleHttpErrorService
  ) { }

  httpPost(modifyRequest: ModifyRequestModel) {
    const date = new Date();
    const md5 = this.md5HashService.hash(Math.floor(date.getTime() / 1000).toString());
    return this.http.post(
      this.apiUrl,
      modifyRequest,
      {headers: new HttpHeaders().set('SECURITY-CHECK', md5)})
      .pipe(catchError(this.handleHttpErrorService.handleError));
  }
}
