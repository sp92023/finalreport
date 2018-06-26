import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieModule } from 'ngx-cookie';

import { ClockInComponent } from './clock-in.component';
import { ClientIpService } from '../shared/client-ip.service';
import { ApiClockInService } from '../shared/api/api-clock-in.service';
import {ReversePipe} from '../shared/pipe/reverse.pipe';
import {ApiLogWriteService} from "../shared/api/api-log-write.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    CookieModule.forRoot()
  ],
  declarations: [
    ClockInComponent,
    ReversePipe
  ],
  providers: [
    ClientIpService,
    ApiClockInService,
    ApiLogWriteService
  ]
})
export class ClockInModule { }
