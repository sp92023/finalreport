import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Md5HashService} from "../md5-hash.service";
import {AssetUpdateModel} from "../../model/test-unit/asset-update.model";

@Injectable()
export class ApiAssetUpdateService {
  private assetPageURL = environment.apiUrl + '/am/update';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  assetUpdate(asset: AssetUpdateModel[]) {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.assetPageURL, asset, {headers: new HttpHeaders().set('QA-CHECK', md5)}).subscribe(
      data => {
      },
      (err) => console.log(err)
    );
  }
}
