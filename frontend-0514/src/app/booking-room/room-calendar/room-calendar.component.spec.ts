import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { UserProfileService } from '../../shared/user-profile.service';
import { ApiBookingEventService } from '../../shared/api/api-booking-event.service';
import { RoomCalendarComponent } from './room-calendar.component';
import { By } from '@angular/platform-browser';
import {UserModel} from '../../model/user.model';
import {BookingEventModel} from "../../model/booking-room/booking-event.model";

describe('RoomCalendarComponent', () => {
  let comp: RoomCalendarComponent;
  let fixture: ComponentFixture<RoomCalendarComponent>;

  beforeEach(() => {
    const authServiceStub = {};
    const routerStub = {};
    const userProfileServiceStub = {
      getUserModel: () => ({}),
      getLoggedIn: () => ({})
    };
    const apiBookingEventServiceStub = {
      roomsList: () => ({
        then: () => ({})
      }),
      insertBooking: () => ({
        then: () => ({})
      }),
      updateBooking: () => ({
        then: () => ({})
      }),
      removeBooking: () => ({
        then: () => ({})
      }),
      bookingList: () => ({
        then: () => ({})
      })
    };
    TestBed.configureTestingModule({
      declarations: [ RoomCalendarComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: Router, useValue: routerStub },
        { provide: UserProfileService, useValue: userProfileServiceStub },
        { provide: ApiBookingEventService, useValue: apiBookingEventServiceStub }
      ]
    });
    fixture = TestBed.createComponent(RoomCalendarComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  describe('ngOnInit', () => {
    const room_model = [{
      id: 1,
      room_name: 'Demo1',
      read_permission: true,
      write_permission: true
    }, {
      id: 2 ,
      room_name: 'Demo2',
      read_permission: true,
      write_permission: true
    }];
    const test_user = [{
      user_id: 1,
      email: "test@htc.com",
      username: "test",
      uid: 1,
      image: 1,
      employee_no: 1
    }];
    it('makes expected calls', () => {
        const userProfileServiceStub: UserProfileService = fixture.debugElement.injector.get(UserProfileService);
        const apiBookingEventServiceStub: ApiBookingEventService = fixture.debugElement.injector.get(ApiBookingEventService);
        // spyOn(comp, 'show_room');
        spyOn(comp, 'errorEvent');
        spyOn(comp, 'serializeEvent');
        spyOn(comp, 'checkValidEvent');
        spyOn(userProfileServiceStub, 'getUserModel').and.callFake( () =>  {
          return test_user;
        });

        spyOn(userProfileServiceStub, 'getLoggedIn').and.callFake(() => {
          return true;
        });
        spyOn(apiBookingEventServiceStub, 'roomsList').and.returnValue(Promise.resolve(room_model));
        // spyOn(apiBookingEventServiceStub, 'roomsList').and.callFake( () => {
        //   return user_model;
        // });
        spyOn(apiBookingEventServiceStub, 'insertBooking');
        spyOn(apiBookingEventServiceStub, 'updateBooking');
        spyOn(apiBookingEventServiceStub, 'removeBooking');
        comp.ngOnInit();
        // fixture.detectChanges();
        // expect(comp.show_room).toHaveBeenCalled();
        // expect(comp.errorEvent).toHaveBeenCalled();
        expect(userProfileServiceStub.getUserModel).toHaveBeenCalled();
        expect(userProfileServiceStub.getLoggedIn).toHaveBeenCalled();
        expect(apiBookingEventServiceStub.roomsList).toHaveBeenCalled();
        // expect(apiBookingEventServiceStub.insertBooking).toHaveBeenCalled();
        // expect(apiBookingEventServiceStub.updateBooking).toHaveBeenCalled();
        // expect(apiBookingEventServiceStub.removeBooking).toHaveBeenCalled();
      }
    );

  });

  describe('getBookingEvent', () => {
    const test_event = {
      id: '1',
      roomid: 1,
      room: 'DM1',
      userid: 1,
      text: 'Test',
      flag: true,
      username: 'test'
    }
    it('makes expected calls', () => {
      const apiBookingEventServiceStub: ApiBookingEventService = fixture.debugElement.injector.get(ApiBookingEventService);

      spyOn(comp, 'show_room');
      spyOn(apiBookingEventServiceStub, 'bookingList').and.returnValue(Promise.resolve(test_event));

      comp.getBookingEvent();
      fixture.detectChanges();
      // expect(comp.show_room).toHaveBeenCalled();
      expect(apiBookingEventServiceStub.bookingList).toHaveBeenCalled();
    });
  });


  describe('checkValidEvent', () => {

    it('makes expected calls return true', () => {
      expect(comp.checkValidEvent(1000000001)).toBe(true);
    });
    it('makes expected calls return false', () => {
      expect(comp.checkValidEvent(1)).toBe(false);
    });
  });
  describe('show_room', () => {

    const room_model = [{
      id: 1,
      room_name: 'Demo1',
      read_permission: false,
      write_permission: true
    },{
      id: 2,
      room_name: 'Demo2',
      read_permission: true,
      write_permission: false
    },{
      id: 3,
      room_name: 'Demo3',
      read_permission: false,
      write_permission: false
    }];
    const test_event = [{
      id: 1,
      roomid: 1,
      room: 'DM1',
      start_date: "2018-01-01T09:05:05.035Z",
      end_date: "2016-01-01T10:05:05.035Z",
      userid: 1,
      text: 'Test1',
      flag: true,
      username: 'test1'
    },{
      id: 2,
      roomid: 2,
      room: 'DM2',
      start_date: "2018-01-02T09:05:05.035Z",
      end_date: "2016-01-02T10:05:05.035Z",
      userid: 2,
      text: 'Test2',
      flag: true,
      username: 'test2'
    },{
      id: 3,
      roomid: 3,
      room: 'DM3',
      start_date: "2018-01-03T09:05:05.035Z",
      end_date: "2016-01-03T10:05:05.035Z",
      userid: 3,
      text: 'Test3',
      flag: true,
      username: 'test3'
    }];

    beforeEach(() => {
      const userProfileServiceStub: UserProfileService = fixture.debugElement.injector.get(UserProfileService);
      const apiBookingEventServiceStub: ApiBookingEventService = fixture.debugElement.injector.get(ApiBookingEventService);

      spyOn(userProfileServiceStub, 'getLoggedIn').and.callFake(() => {
        return true;
      });
      spyOn(apiBookingEventServiceStub, 'roomsList').and.returnValue(Promise.resolve(room_model));
      spyOn(apiBookingEventServiceStub, 'bookingList').and.returnValue(Promise.resolve(test_event));
      spyOn(comp, 'customer_event_color');

      // fixture.detectChanges();
      comp.ngOnInit();
    });
    it('makes expected calls show_room', async() => {
      comp.show_room(1);
      fixture.whenStable().then(() => {
        expect(scheduler.config.readonly).toBe(false);
        expect(comp.customer_event_color).toHaveBeenCalled();

      });
    });
    it('makes expected calls show_room', async() => {
      comp.show_room(2);
      fixture.whenStable().then(() => {
        expect(scheduler.config.readonly).toBe(true);
      });
    });
    it('makes expected calls show_room', async() => {
      comp.show_room(3);
      fixture.whenStable().then(() => {
        expect(scheduler.config.readonly).toBe(true);
      });
    });


  });
  describe('show_room', () => {

    const err_msg = [{
      status: 409,
      statusText: "Test",
      error: {message : "msg"}
    }];

    beforeEach(() => {
      const userProfileServiceStub: UserProfileService = fixture.debugElement.injector.get(UserProfileService);
      const apiBookingEventServiceStub: ApiBookingEventService = fixture.debugElement.injector.get(ApiBookingEventService);
      spyOn(userProfileServiceStub, 'getLoggedIn').and.callFake(() => {
        return true;
      });
      spyOn(apiBookingEventServiceStub, 'roomsList').and.returnValue(Promise.reject(err_msg));
      fixture.detectChanges();
    });

    it('makes expected calls show_room', async() => {
      spyOn(comp, 'errorEvent');
      fixture.whenStable().then(() => {
        expect(comp.errorEvent).toHaveBeenCalled();
      });
    });
    it('makes return status 409', async() => {
      fixture.whenStable().then(() => {
     //   expect(this.errorStatus).toEqual(409);
      });
    });

  });
  describe('serializeEvent', () => {
    it('makes expected calls serializeEvent', () => {
   //   expect(comp.serializeEvent({id:1})).toContain(1);
    });

  });
});


