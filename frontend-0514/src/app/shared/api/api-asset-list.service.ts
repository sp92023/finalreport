import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

import { Md5HashService } from '../md5-hash.service';
import { AssetListModel } from '../../model/test-unit/asset-list.model';
import {environment} from "../../../environments/environment";

export class SearchValue {
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}

@Injectable()
export class ApiAssetListService {

  assetListChanged = new Subject<AssetListModel[]>();
  private assets: AssetListModel[] = [];
  private assetSearchURL = environment.apiUrl + '/am/search';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

    assetList(search: string) {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    const searchValue = new SearchValue(search);
      return this.http.post(this.assetSearchURL, searchValue, {headers: new HttpHeaders().set('QA-CHECK', md5)}).subscribe(
      data => {
        this.setAssetList(<AssetListModel[]>data);
      },
      (err) => console.log(err)
    );
  }

  setAssetList(assets: AssetListModel[]) {
    if (assets == null) {
      this.assets = [];
    } else {
      this.assets = assets;
    }
    this.assetListChanged.next(this.assets.slice());
  }

  getAssetList() {
    return this.assets.slice();
  }

}
