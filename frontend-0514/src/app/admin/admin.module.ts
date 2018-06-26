import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatTabsModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';
import { ClockListComponent } from './clock-list/clock-list.component';
import { ApiClockListService } from '../shared/api/api-clock-list.service';
import { UserGroupComponent } from './user-group/user-group.component';
import {FormsModule} from "@angular/forms";
import {ApiUserListService} from "../shared/api/api-user-list.service";
import {ApiUsergroupListService} from "../shared/api/api-usergroup-list.service";
import {ApiUsergroupUpdateService} from "../shared/api/api-usergroup-update.service";
import { LogComponent } from './log/log.component';
import {ApiLogDisplayService} from "../shared/api/api-log-display.service";
import {ApiLogWriteService} from "../shared/api/api-log-write.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    ApiClockListService,
    ApiUserListService,
    ApiUsergroupListService,
    ApiUsergroupUpdateService,
    ApiLogDisplayService,
    ApiLogWriteService
  ],
  declarations: [
    ClockListComponent,
    UserGroupComponent,
    LogComponent
  ]
})
export class AdminModule { }
