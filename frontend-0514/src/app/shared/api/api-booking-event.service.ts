import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { BookingEventModel } from '../../model/booking-room/booking-event.model';
import { UserIdModel } from '../../model/user-id.model';
import { environment } from '../../../environments/environment';
import {Md5HashService} from "../md5-hash.service";

@Injectable()
export class ApiBookingEventService {

  private bookingListURL = environment.apiUrl + '/general/booking/list';
  private roomsListURL = environment.apiUrl + '/general/rooms/list';
  private bookingActionURL = environment.apiUrl + '/general/booking/action';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) {
  }

  bookingList(): Promise<any> {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.get(this.bookingListURL, {headers: new HttpHeaders().set('QA-CHECK', md5)})
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  roomsList(user_id: UserIdModel): Promise<any> {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.roomsListURL, JSON.stringify(user_id), {headers: new HttpHeaders().set('QA-CHECK', md5)})
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  insertBooking(event: BookingEventModel): Promise<BookingEventModel> {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.bookingActionURL, JSON.stringify(event), {headers: new HttpHeaders().set('QA-CHECK', md5)})
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  updateBooking(event: BookingEventModel): Promise<void> {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.bookingActionURL, JSON.stringify(event), {headers: new HttpHeaders().set('QA-CHECK', md5)})
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  removeBooking(event: BookingEventModel): Promise<void> {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.bookingActionURL, JSON.stringify(event), {headers: new HttpHeaders().set('QA-CHECK', md5)})
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  handleError(error: Promise<any[]>): Promise<any> {
    return Promise.reject(error);
  }
}

