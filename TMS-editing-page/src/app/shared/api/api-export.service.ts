import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from "rxjs/internal/operators";

import { Md5HashService } from '../md5-hash.service';
import { environment } from "../../../environments/environment";
import { HandleHttpErrorService } from "../handle-http-error.service";

export class ExportRequestModel {
  hospital_id: number;

  constructor(hospital_id: number) {
    this.hospital_id = hospital_id;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiExportService {

  private apiUrl = environment.apiUrl + '/export';

  constructor(
    private http: HttpClient,
    private md5HashService: Md5HashService,
    private handleHttpErrorService: HandleHttpErrorService
  ) { }

  httpPost(hospital_id: number) {
    const date = new Date();
    const md5 = this.md5HashService.hash(Math.floor(date.getTime() / 1000).toString());
    return this.http.post(
      this.apiUrl,
      new ExportRequestModel(hospital_id),
      {headers: new HttpHeaders().set('SECURITY-CHECK', md5)})
      .pipe(catchError(this.handleHttpErrorService.handleError));
  }
}
