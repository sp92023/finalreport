import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatExpansionModule, MatIconModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoomCalendarComponent } from './room-calendar/room-calendar.component';
import { ApiBookingEventService } from '../shared/api/api-booking-event.service';
import {ApiLogWriteService} from "../shared/api/api-log-write.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [
    ApiBookingEventService,
    ApiLogWriteService
  ],
  declarations: [
    RoomCalendarComponent
  ]
})
export class BookingRoomModule { }
