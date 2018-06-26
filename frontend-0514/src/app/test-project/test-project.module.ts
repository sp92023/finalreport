import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectControllerComponent } from './project-controller/project-controller.component';
import { MmhDashboardComponent } from './mmh/mmh-dashboard/mmh-dashboard.component';
import { MmhQrcodeComponent } from './mmh/mmh-qrcode/mmh-qrcode.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatExpansionModule,
  MatInputModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApiMmhQueryDrugService } from "../shared/api/api-mmh-query-drug.service";
import { ApiMmhQrcodepageService } from "../shared/api/api-mmh-qrcodepage.service";
import { ApiMmhDrugpageService } from "../shared/api/api-mmh-drugpage.service";
import {FormatStringPipe} from "../shared/pipe/string-format.pipe";
import {DateChangePipe} from "../shared/pipe/date-change.model";
import { HcQrcodeComponent } from './hc/hc-qrcode/hc-qrcode.component';
import { ApiHcQueryDrugService } from "../shared/api/api-hc-query-drug.service";
import { ApiHcQrcodepageService } from "../shared/api/api-hc-qrcodepage.service";
import { ApiHcDrugpageService } from "../shared/api/api-hc-drugpage.service";
import {DrugPageItemService} from "../shared/drug-page-item.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  exports: [
    ],
  declarations: [
    ProjectControllerComponent,
    MmhDashboardComponent,
    MmhQrcodeComponent,
    FormatStringPipe,
    DateChangePipe,
    HcQrcodeComponent
  ],
  providers: [
    ApiMmhQueryDrugService,
    ApiMmhQrcodepageService,
    ApiMmhDrugpageService,
    ApiHcQueryDrugService,
    ApiHcQrcodepageService,
    ApiHcDrugpageService,
    DrugPageItemService
  ]
})
export class TestProjectModule { }
