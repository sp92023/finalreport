import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { TestUnitModule } from './test-unit/test-unit.module';
import { TestProjectModule } from './test-project/test-project.module';
import { ToolsModule } from './tools/tools.module';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { BookingRoomModule } from './booking-room/booking-room.module';
import { ClockInModule } from './clock-in/clock-in.module';

import { AppComponent } from './app.component';

import { UserProfileService } from './shared/user-profile.service';
import { Md5HashService } from './shared/md5-hash.service';
import { environment } from '../environments/environment';
import {ReversePipe} from "./shared/pipe/reverse.pipe";
import {ApiLogWriteService} from "./shared/api/api-log-write.service";

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.googleClientId)
  }
]);

@NgModule({
  declarations: [
    AppComponent
  ],
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
    Md5HashService,
    ApiLogWriteService
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ AppComponent ]
})
export class AppModule { }
