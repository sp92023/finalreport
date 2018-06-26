import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ApiTypeListService} from '../../shared/api/api-type-list.service';
import {ApiAssetModifyService} from '../../shared/api/api-asset-modify.service';
import {AssetModifyModel} from '../../model/test-unit/asset-modify.model';
import {TypeModel} from '../../model/test-unit/type.model';
import {AssetUpdateModel} from "../../model/test-unit/asset-update.model";
import {ApiAssetUpdateService} from "../../shared/api/api-asset-update.service";
import {UserProfileService} from "../../shared/user-profile.service";
import {ApiLogWriteService} from "../../shared/api/api-log-write.service";

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  private subsTypeList: Subscription;
  private subsAssetList: Subscription;
  private types: TypeModel[] = [];
  private assetModify: AssetModifyModel[] = [];
  private typeValue: TypeModel;

  constructor(
    private apiTypeListService: ApiTypeListService,
    private apiAssetModifyService: ApiAssetModifyService,
    private apiAssetUpdateService: ApiAssetUpdateService,
    private userProfileService: UserProfileService,
    private apiLogWriteService: ApiLogWriteService
  ) {
    this.apiLogWriteService.writeLog('AddDeviceComponent | Work');
  }

  ngOnInit() {
    this.subsTypeList = this.apiTypeListService.typeList()
      .subscribe(
        data => {
          if (data !== null) {
            this.types = <TypeModel[]>data;
          }
        },
        (err) => {
          console.log(err);
        }
      );
    this.subsAssetList = this.apiAssetModifyService.assetModifyChanged
      .subscribe(
        (assetModify: AssetModifyModel[]) => {
          this.assetModify = assetModify;
        }
      );
  }

  changeType() {
    this.apiLogWriteService.writeLog('AddDeviceComponent | Change Type');
    this.apiAssetModifyService.assetPage(this.typeValue.sn, null);
  }

  save() {
    this.apiLogWriteService.writeLog('AddDeviceComponent | Save');
    let assetUpate: AssetUpdateModel[] = [];
    for (let i = 0; i < this.assetModify.length; i++) {
      assetUpate.push(new AssetUpdateModel(this.assetModify[i].column, this.assetModify[i].value));
    }
    assetUpate.push(new AssetUpdateModel("flag", "true"));
    assetUpate.push(new AssetUpdateModel("manager", "web"));
    assetUpate.push(new AssetUpdateModel("asset_type", this.typeValue.type.toString()));
    assetUpate.push(new AssetUpdateModel("username", this.userProfileService.getUserModel().username.toString()));
    this.apiAssetUpdateService.assetUpdate(assetUpate);
    alert("success");
  }

  checkAssetColumnSelection(assetModify: AssetModifyModel) {
    if (assetModify.selection == 1) {
      return true;
    } else {
      return false;
    }
  }

  checkAssetColumnReadOnly(assetModify: AssetModifyModel) {
    if (assetModify.column == 'asset_id' || assetModify.column == 'asset_type' || assetModify.column == 'current_user') {
      return true;
    } else {
      return false;
    }
  }
}
