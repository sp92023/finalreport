import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Md5HashService} from "../md5-hash.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TransferHistoryModel} from "../../model/test-unit/transfer-history.model";

@Injectable()
export class ApiTransferAssetService {

  private userInfoURL = environment.apiUrl + '/am/transfer';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  transferAsset(transferHistoryModel: TransferHistoryModel) {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.userInfoURL, transferHistoryModel, {headers: new HttpHeaders().set('QA-CHECK', md5)});
  }

}
