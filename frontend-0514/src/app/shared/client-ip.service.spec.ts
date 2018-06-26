import { TestBed, inject } from '@angular/core/testing';

import { ClientIpService } from './client-ip.service';
import {Md5HashService} from "./md5-hash.service";
import {ToolsModule} from "../tools/tools.module";
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {CoreModule} from "../core/core.module";
import {TestProjectModule} from "../test-project/test-project.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserProfileService} from "./user-profile.service";
import {TestUnitModule} from "../test-unit/test-unit.module";
import {AuthServiceConfig, GoogleLoginProvider, SocialLoginModule} from "angularx-social-login";
import {BookingRoomModule} from "../booking-room/booking-room.module";
import {AdminModule} from "../admin/admin.module";
import {ClockInModule} from "../clock-in/clock-in.module";
import {environment} from "../../environments/environment";

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.googleClientId)
  }
]);


describe('ClientIpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SocialLoginModule.initialize(config),
        // ------
        CoreModule,
        TestUnitModule,
        TestProjectModule,
        ToolsModule,
        AdminModule,
        BookingRoomModule,
        ClockInModule,
        AppRoutingModule
      ],
      providers: [
        UserProfileService,
        Md5HashService
      ]
    });
  });

  it('should be created', inject([ClientIpService], (service: ClientIpService) => {
    expect(service).toBeTruthy();
  }));
});
