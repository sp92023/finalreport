import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule,
  MatIconModule, MatTableModule,
  MatFormFieldModule, MatPaginatorModule,
  MatInputModule, MatSortModule,
  MatExpansionModule, MatSelectModule,
  MatCardModule, MatDialogModule
} from '@angular/material';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AddDeviceComponent } from './add-device/add-device.component';
import { ModifyDeviceComponent } from './modify-device/modify-device.component';
import { TransferDeviceComponent } from './transfer-device/transfer-device.component';
import { SearchDeviceComponent } from './search-device/search-device.component';
import { ApiAssetListService } from '../shared/api/api-asset-list.service';
import { ApiTypeListService } from '../shared/api/api-type-list.service';
import { ApiAssetModifyService } from '../shared/api/api-asset-modify.service';
import { ApiAssetUpdateService } from "../shared/api/api-asset-update.service";
import { ApiTransferListUserService } from "../shared/api/api-transfer-list-user.service";
import { ApiTransferAssetService } from "../shared/api/api-transfer-asset.service";
import { ApiLogWriteService } from "../shared/api/api-log-write.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    ],
  providers: [
    ApiAssetListService,
    ApiTypeListService,
    ApiAssetModifyService,
    ApiAssetUpdateService,
    ApiTransferListUserService,
    ApiTransferAssetService,
    ApiLogWriteService
  ],
  declarations: [
    AddDeviceComponent,
    ModifyDeviceComponent,
    TransferDeviceComponent,
    SearchDeviceComponent
  ]
})
export class TestUnitModule { }
