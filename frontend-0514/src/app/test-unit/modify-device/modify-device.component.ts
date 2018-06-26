import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiAssetModifyService} from '../../shared/api/api-asset-modify.service';
import {AssetModifyModel} from '../../model/test-unit/asset-modify.model';
import {Subscription} from 'rxjs/Subscription';
import {AssetUpdateModel} from "../../model/test-unit/asset-update.model";
import {UserProfileService} from "../../shared/user-profile.service";
import {ApiAssetUpdateService} from "../../shared/api/api-asset-update.service";
import {TransferDeviceComponent} from "../transfer-device/transfer-device.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ApiLogWriteService} from "../../shared/api/api-log-write.service";


@Component({
  selector: 'app-modify-device',
  templateUrl: './modify-device.component.html',
  styleUrls: ['./modify-device.component.css']
})
export class ModifyDeviceComponent implements OnInit {

  private hasCurrentUser = false;
  private currentUser: string;
  private assetID: string;
  private assetModify: AssetModifyModel[] = [];
  private subsAssetList: Subscription;

  constructor(
    private apiAssetModifyService: ApiAssetModifyService,
    private userProfileService: UserProfileService,
    private apiAssetUpdateService: ApiAssetUpdateService,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private apiLogWriteService: ApiLogWriteService
  ) {
    this.apiLogWriteService.writeLog('ModifyDeviceComponent | Work');
    this.activatedRoute.params.subscribe( params => {
      if (params['value'] !== undefined) {
        this.assetID = params['value'];
        this.apiAssetModifyService.assetPage(null, parseInt(this.assetID, 10));
      }
    } );
  }

  ngOnInit() {
    this.subsAssetList = this.apiAssetModifyService.assetModifyChanged
      .subscribe(
        (assetModify: AssetModifyModel[]) => {
          this.assetModify = assetModify;
        }
      );
  }

  save() {
    this.apiLogWriteService.writeLog('ModifyDeviceComponent | Save');
    let assetUpate: AssetUpdateModel[] = [];
    for (let i = 0; i < this.assetModify.length; i++) {
      assetUpate.push(new AssetUpdateModel(this.assetModify[i].column, this.assetModify[i].value));
    }
    assetUpate.push(new AssetUpdateModel("flag", "true"));
    assetUpate.push(new AssetUpdateModel("manager", "web"));
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
      if (assetModify.column == 'current_user') {
        this.currentUser = assetModify.value;
        this.hasCurrentUser = true;
      }
      return true;
    } else {
      return false;
    }
  }

  transfer(): void {
    this.apiLogWriteService.writeLog('ModifyDeviceComponent | Transfer');
    if (this.hasCurrentUser) {
      let dialogRef = this.dialog.open(TransferDeviceComponent, {
        width: '500px',
        data: { assetID: this.assetID, currentUser: this.currentUser }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.apiAssetModifyService.assetPage(null, parseInt(this.assetID, 10));
      });
    } else {
      alert('No current user');
    }
  }

}
