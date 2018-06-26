import { TestBed, inject } from '@angular/core/testing';

import { UserProfileService } from './user-profile.service';
import {MicrosoftAuthService} from "./microsoft-auth.service";
import {GoogleAuthService} from "./google-auth.service";
import {AuthService, AuthServiceConfig, GoogleLoginProvider, SocialLoginModule} from "angularx-social-login";
import {Router} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";
import {ToolsModule} from "../tools/tools.module";
import {TestProjectModule} from "../test-project/test-project.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TestUnitModule} from "../test-unit/test-unit.module";
import {HttpClientModule} from "@angular/common/http";
import {BookingRoomModule} from "../booking-room/booking-room.module";
import {AdminModule} from "../admin/admin.module";
import {BrowserModule} from "@angular/platform-browser";
import {ClockInModule} from "../clock-in/clock-in.module";
import {CoreModule} from "../core/core.module";
import {environment} from "../../environments/environment";
import {Md5HashService} from "./md5-hash.service";

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.googleClientId)
  }
]);

describe('UserProfileService', () => {
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

  it('should be created', inject([UserProfileService], (service: UserProfileService) => {
    expect(service).toBeTruthy();
  }));
});
