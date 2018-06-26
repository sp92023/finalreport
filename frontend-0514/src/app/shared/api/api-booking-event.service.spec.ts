import { TestBed, inject ,getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiBookingEventService} from './api-booking-event.service';
import { Md5HashService} from "../md5-hash.service";
import { environment } from '../../../environments/environment';




describe('ApiBookingEventService', () => {
  let postService;
  let mockHttpClient;

  const dummydata = [
    { login: 'John' },
    { login: 'Doe' }
  ];
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ApiBookingEventService,Md5HashService]
    });
    postService=TestBed.get(ApiBookingEventService,Md5HashService);
    mockHttpClient = TestBed.get(HttpTestingController);
  });
  it('should be created', inject([ApiBookingEventService], (service: ApiBookingEventService) => {

    expect(service).toBeTruthy();
  }));
  it('ApiBookingEventService should be created', () => {
    expect(ApiBookingEventService).toBeTruthy();
  });
  it('Md5HashService should be created', () => {
    expect(Md5HashService).toBeTruthy();
  });
  it(`bookingList unsing GET`, () => {
    postService.bookingList().then(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(dummydata);
    });


    const req = mockHttpClient.expectOne(environment.apiUrl + '/general/booking/list');
    expect(req.request.method).toBe("GET");
    req.flush(dummydata);

  });

  it(`roomsList using POST`, () => {

    postService.roomsList().then(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(dummydata);
    });

    const req = mockHttpClient.expectOne(environment.apiUrl + '/general/rooms/list');
    expect(req.request.method).toBe("POST");
    req.flush(dummydata);
  });

  it(`insertBooking using POST `, () => {

    postService.insertBooking().then(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(dummydata);
    });
    const req = mockHttpClient.expectOne(environment.apiUrl + '/general/booking/action');
    expect(req.request.method).toBe("POST");
    req.flush(dummydata);
  });

  it(`updateBooking using POST `, () => {

    postService.updateBooking().then(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(dummydata);
    });
    const req = mockHttpClient.expectOne(environment.apiUrl + '/general/booking/action');
    expect(req.request.method).toBe("POST");
    req.flush(dummydata);
  });

  it(`removeBooking using POST `, () => {

    postService.removeBooking().then(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(dummydata);
    });
    const req = mockHttpClient.expectOne(environment.apiUrl + '/general/booking/action');
    expect(req.request.method).toBe("POST");
    req.flush(dummydata);
  });

});
