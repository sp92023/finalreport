import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolsModule } from './tools/tools.module';
import { TestProjectModule } from './test-project/test-project.module';
import { TestUnitModule } from './test-unit/test-unit.module';
import { BookingRoomModule } from './booking-room/booking-room.module';
import { AdminModule } from './admin/admin.module';
import { ClockInModule } from './clock-in/clock-in.module';
import { CoreModule } from './core/core.module';
import { Md5HashService } from './shared/md5-hash.service';
import { UserProfileService } from './shared/user-profile.service';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.googleClientId)
  }
]);

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        Md5HashService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('call ngOnInit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'ngOnInit').and.callThrough();
    app.ngOnInit();
    expect(app.ngOnInit).toHaveBeenCalled();
  });
});
