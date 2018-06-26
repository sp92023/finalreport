import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/internal/operators";

import { Md5HashService } from "../md5-hash.service";
import { environment } from "../../../environments/environment";
import { HandleHttpErrorService } from "../handle-http-error.service";

export class DashboardRequestModel {
  hospital_ids: number[];

  constructor(hospital_ids: number[]) {
    this.hospital_ids = hospital_ids;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiDashboardService {

  private apiUrl = environment.apiUrl + '/dashboard';

  constructor(
    private http: HttpClient,
    private md5HashService: Md5HashService,
    private handleHttpErrorService: HandleHttpErrorService
  ) { }

  httpPost(hospital_ids: number[]) {
    const date = new Date();
    const md5 = this.md5HashService.hash(Math.floor(date.getTime() / 1000).toString());
    return this.http.post(
      this.apiUrl,
      new DashboardRequestModel(hospital_ids),
      {headers: new HttpHeaders().set('SECURITY-CHECK', md5)})
      .pipe(catchError(this.handleHttpErrorService.handleError));
  }
}
