import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCoverageComponent } from './test-coverage/test-coverage.component';
import {
  MatCardModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatCheckboxModule,
  MatIconModule, MatButtonModule, MatTableModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {ApiToolsCoveragePageService} from "../shared/api/api-tools-coverage-page.service";
import {ApiToolsCoverageTableService} from "../shared/api/api-tools-coverage-table.service";
import {ApiLogWriteService} from "../shared/api/api-log-write.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  declarations: [TestCoverageComponent],
  providers: [
    ApiToolsCoveragePageService,
    ApiToolsCoverageTableService,
    ApiLogWriteService
  ]
})
export class ToolsModule { }
