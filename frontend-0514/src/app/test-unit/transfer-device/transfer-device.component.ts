import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ApiTransferListUserService} from "../../shared/api/api-transfer-list-user.service";
import {Subscription} from "rxjs/Subscription";
import {UserMentionModel} from "../../model/test-unit/user-mention.model";
import {ApiTransferAssetService} from "../../shared/api/api-transfer-asset.service";
import {TransferHistoryModel} from "../../model/test-unit/transfer-history.model";
import {ApiLogWriteService} from "../../shared/api/api-log-write.service";

@Component({
  selector: 'app-transfer-device',
  templateUrl: './transfer-device.component.html',
  styleUrls: ['./transfer-device.component.css']
})

export class TransferDeviceComponent implements OnInit {

  private currentUser: string;
  private userValue: UserMentionModel;
  private users = [];
  private subsListUser: Subscription;
  private subsTransferAsset: Subscription;
  private assetId: string;

  constructor(
    public dialogRef: MatDialogRef<TransferDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiTransferListUserService: ApiTransferListUserService,
    private apiTransferAssetService: ApiTransferAssetService,
    private apiLogWriteService: ApiLogWriteService
  ) {
    this.apiLogWriteService.writeLog('TransferDeviceComponent | Work');
  }

  ngOnInit() {
    if (this.data != undefined) {
      if (this.data.assetID != undefined) {
        this.assetId = this.data.assetID;
      }
      if (this.data.currentUser != undefined) {
        this.currentUser = this.data.currentUser;
      }
    }
    this.subsListUser = this.apiTransferListUserService.listUser()
      .subscribe(
        data => {
          if (data !== null) {
            const sourceUsers = <UserMentionModel[]>data;
            for (let i = 0; i < sourceUsers.length; i++) {
              if (sourceUsers[i].mention !== this.currentUser) {
                this.users.push(sourceUsers[i]);
              }
            }
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  transferAsset() {
    this.apiLogWriteService.writeLog('TransferDeviceComponent | Transfer Asset');
    this.dialogRef.close();
    if (this.userValue !== undefined) {
      if (this.userValue.mention !== this.currentUser) {
        const transferHistoryModel = new TransferHistoryModel(parseInt(this.assetId, 10), this.userValue.mention, this.currentUser, 'web');

        this.subsTransferAsset = this.apiTransferAssetService.transferAsset(transferHistoryModel).subscribe(
          data => {
          },
          (err) => {
            console.log(err);
          }
        )
      } else {
        alert('The user is the same');
      }
    } else {
      alert('No user be chosen');
    }
  }
}
