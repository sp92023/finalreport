import { Injectable } from '@angular/core';
import {Md5HashService} from '../md5-hash.service';
import {AssetListModel} from '../../model/test-unit/asset-list.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import {AssetModifyModel} from '../../model/test-unit/asset-modify.model';
import {environment} from '../../../environments/environment';
import {AssetPageModel} from '../../model/test-unit/asset-page.model';

@Injectable()
export class ApiAssetModifyService {

  assetModifyChanged = new Subject<AssetModifyModel[]>();
  private assets: AssetModifyModel[] = [];
  private assetPageURL = environment.apiUrl + '/am/page';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  assetPage(type_id: number, asset_id: number) {
    const assetPageModel = new AssetPageModel(type_id, asset_id);
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.assetPageURL, assetPageModel, {headers: new HttpHeaders().set('QA-CHECK', md5)}).subscribe(
      data => {
        this.setAssetModify(<AssetModifyModel[]>data);
      },
      (err) => console.log(err)
    );
  }

  setAssetModify(assetModify: AssetModifyModel[]) {
    if (assetModify == null) {
      this.assets = [];
    } else {
      this.assets = assetModify;
    }
    this.assetModifyChanged.next(this.assets.slice());
  }

  getAssetModify() {
    return this.assets.slice();
  }

}
