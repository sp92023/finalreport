import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from "rxjs/internal/operators";

import { Md5HashService } from '../md5-hash.service';
import { environment } from "../../../environments/environment";
import { HandleHttpErrorService } from "../handle-http-error.service";
import { CreateRequestModel } from "../../model/create/create-request.model";

@Injectable({
  providedIn: 'root'
})
export class ApiCreateService {

  private apiUrl = environment.apiUrl + '/create';

  constructor(
    private http: HttpClient,
    private md5HashService: Md5HashService,
    private handleHttpErrorService: HandleHttpErrorService
  ) { }

  httpPost(createRequest: CreateRequestModel) {
    const date = new Date();
    const md5 = this.md5HashService.hash(Math.floor(date.getTime() / 1000).toString());
    return this.http.post(
      this.apiUrl,
      createRequest,
      {headers: new HttpHeaders().set('SECURITY-CHECK', md5)})
      .pipe(catchError(this.handleHttpErrorService.handleError));
  }
}
