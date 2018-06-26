import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AuthService} from 'angularx-social-login';
import 'dhtmlx-scheduler';
import {} from '@types/dhtmlxscheduler';
import 'dhtmlx-scheduler/codebase/ext/dhtmlxscheduler_minical';
import 'dhtmlx-scheduler/codebase/ext/dhtmlxscheduler_collision';
import {SocialUser} from 'angularx-social-login';
import {Router} from '@angular/router';
import {UserProfileService} from '../../shared/user-profile.service';
import {ApiBookingEventService} from '../../shared/api/api-booking-event.service';
import {UserModel} from '../../model/user.model';
import {RoomModel} from '../../model/booking-room/room.model';
import {BookingEventModel} from '../../model/booking-room/booking-event.model';
import * as jQuery from 'jquery';

declare var jQuery: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-room-calendar',
  templateUrl: './room-calendar.component.html',
  styleUrls: ['./room-calendar.component.css']
})
export class RoomCalendarComponent implements OnInit {
  @ViewChild('scheduler_here') schedulerContainer: ElementRef;
  @ViewChild('exampleModal') exampleModal: ElementRef;

  constructor(private authService: AuthService,
              private userService: UserProfileService,
              private apiBookingEventService: ApiBookingEventService,
              private router: Router) {
  }

  private loggedIn: boolean;
  private curRoomPage = 1;
  private b_rooms = []; // get backend data
  private loginUser: UserModel;
  private loginBooksID = [];
  private roomInfo: RoomModel[];
  private errorContent = 'Error Content';
  private errorTitle = 'Error Title';
  private errorStatus;

  ngOnInit() {

    scheduler.config.collision_limit = 1; // only allows creating 1 events per time slot
    scheduler.config.first_hour = 8; // the start of time in the day
    scheduler.config.last_hour = 20; // the end of time in the day
    scheduler.config.hour_size_px = 80; // height of per hour
    scheduler.config.time_step = 30; // the min time
    // scheduler.config.edit_on_create = false; //add event without confirm
    // scheduler.config.dblclick_create = false; // no support dbclick to add event

    scheduler.config.xml_date = '%Y-%m-%d %H:%i';
    scheduler.init(this.schedulerContainer.nativeElement, new Date());
    scheduler.config.readonly = true;

    scheduler.config.lightbox.sections = [
      {name: 'description', height: 130, map_to: 'text', type: 'textarea', focus: true}
    ];

    this.loginUser = this.userService.getUserModel();
    this.loggedIn = this.userService.getLoggedIn();

    if (this.loggedIn) {
      this.apiBookingEventService.roomsList(this.loginUser) // get room info from backend
        .then((data) => {
            // console.log(data);
            this.roomInfo = data;
            for (let i = 0; i < data.length; i++) {
              this.b_rooms.push(data[i].room_name);
            }
            this.show_room(this.curRoomPage);
          }, (err) => {
            this.errorEvent(err);
          }
        );
    }
    scheduler.templates.event_text = function (start, end, ev) {
      if (ev.username == null) {
        return this.loginUser.username;
      } else {
        return ev.username;
      }
    }.bind(this);
    // event show username at month page
    scheduler.templates.event_bar_text = function (start, end, event) {
      return event.username;
    };

    scheduler.attachEvent('onEventAdded', (id, ev) => {
      scheduler.setUserData(id, 'roomid', this.curRoomPage);
      scheduler.setUserData(id, 'userid', this.loginUser.user_id);
      scheduler.setUserData(id, 'username', this.loginUser.username);
      this.apiBookingEventService.insertBooking(this.serializeEvent(ev, true))
        .then((response) => {
            if (response.id != id) {
              scheduler.changeEventId(id, response.id);
              this.loginBooksID.push(response.id);
            }
          }, (err) => {
            this.errorEvent(err);
          }
        );
    });

    scheduler.attachEvent('onEventChanged', (id, ev) => {
      ev.flag = true;
      this.apiBookingEventService.updateBooking(this.serializeEvent(ev))
        .then((response) => {
          }, (err) => {
            this.errorEvent(err);
          }
        );
    });

    scheduler.attachEvent('onEventDeleted', (id, ev) => {
      ev.flag = false;
      this.apiBookingEventService.removeBooking(this.serializeEvent(ev))
        .then((response) => {
          }, (err) => {
            this.errorEvent(err);
          }
        );
    });
    scheduler.attachEvent('onDblClick', function (id, e) {
      // Not support double click event
      return true;
    });
    scheduler.attachEvent('onClick', function (id, e) {
      // limit event owner can edit only (not yet)
      return this.checkValidEvent(id);

    }.bind(this));

    scheduler.attachEvent('onBeforeDrag', function (id, mode, e) {

      // limit drag action at month view
      if (scheduler.getState().mode == 'month') {
        return false;
      }

      // limit drag action at week view
      if (id == null) {

        return true;
      } else {
        return this.checkValidEvent(id);
      }
      // return true;
    }.bind(this));

    scheduler.templates.event_class = function (start, end, event) {
      if (event.username == this.loginUser.username) {
        return 'login_user';
      } else if (event.username == null) {
        return 'login_user';
      } else {
        return 'not_login_user';
      }

    }.bind(this);
    scheduler.attachEvent('onDblClick', function (id) {
      const event = scheduler.getEvent(id);
      console.log(id);
      console.log(event);
      if (id == undefined || event.username == this.loginUser.username) { return true; }
      return event.readonly;
    }.bind(this));

    scheduler.renderCalendar({
      container: 'cal_here',
      navigation: true,
      handler: function (date) {
        scheduler.setCurrentView(date);
      }
    });
  }
  public block_readonly(id) {
    const event = scheduler.getEvent(id);
    if (id == undefined || event.user == this.loginUser.username) { return true; }
    return event.readonly;
  }

  public getBookingEvent() {
    this.apiBookingEventService.bookingList() // get booking event info from backend
      .then((data) => {
        const datas = [];
        if (data != null) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].username === this.loginUser.username) {
              this.loginBooksID.push(data[i].id);
            }
          }
          scheduler.parse(datas, 'json');
        }
        scheduler.clearAll();
        this.show_room(this.curRoomPage);
        jQuery(this.exampleModal.nativeElement).modal('hide');
      });
  }

  public checkValidEvent(target_ID: number): Boolean {
    if (target_ID > 1000000000) {
      return true;
    }
    for (let i = 0; i < this.loginBooksID.length; i++) {
      if (this.loginBooksID[i] == target_ID) {
        return true;
      }
    }
    return false;
  }

  public errorEvent(err) {
    this.errorStatus = err.status;
    this.errorTitle = '(' + err.status + ')' + err.statusText;
    this.errorContent = err.error.message;

    jQuery(this.exampleModal.nativeElement).modal('show');

  }

  public errorMethod() {
    if (this.errorStatus === 409) {
      this.getBookingEvent();
    } else {
      jQuery(this.exampleModal.nativeElement).modal('hide');
    }
  }

  public customer_event_color(datas) {
    this.loginBooksID = [];
    for (let i = 0; i < datas.length; i++) {
      if (datas[i].username == this.loginUser.username) {
        this.loginBooksID.push(datas[i].id);
      }
    }
  }

  public show_room(roomNumber: number) {
    let flag = 1;
    this.curRoomPage = roomNumber;
    if (this.roomInfo != null) {
      if (this.roomInfo[this.curRoomPage - 1].write_permission === true) {
        scheduler.config.readonly = false;
        console.log('page permission: R+W');
      } else if (this.roomInfo[this.curRoomPage - 1].read_permission === true) {
        console.log('page permission: R');
        scheduler.config.readonly = true;
      } else {
        scheduler.config.readonly = true;
        console.log('page permission: hide');
        flag = 0;
      }
    }

    scheduler.clearAll();
    this.apiBookingEventService.bookingList()
      .then((data) => {
        const datas = [];
        if (data != null) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].roomid == this.curRoomPage) {
              datas.push(data[i]);
            }
          }
          if (flag == 1) {
            scheduler.parse(datas, 'json');
            this.customer_event_color(datas);
          }
        }
      }, (err) => {
        this.errorEvent(err);
      });
  }

  public serializeEvent(data: any, insert: boolean = false): BookingEventModel {
    const result = {};

    for (const i in data) {
      if (i.charAt(0) == '$' || i.charAt(0) == '_') {
        continue;
      }
      if (insert && i == 'id') {
        continue;
      }
      if (data[i] instanceof Date) {
        result[i] = scheduler.templates.xml_format(data[i]);
      } else {
        result[i] = data[i];
      }
    }
    return result as BookingEventModel;
  }
}
