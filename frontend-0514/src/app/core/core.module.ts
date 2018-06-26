import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule } from '@angular/material';

import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { SafeHtmlPipe } from '../shared/pipe/safe-html.pipe';

import { ApiUserProfileService } from '../shared/api/api-user-profile.service';
import { SignInGuardService } from '../shared/sign-in-guard.service';
import { MicrosoftAuthService } from '../shared/microsoft-auth.service';
import { GoogleAuthService } from '../shared/google-auth.service';
import { LoadingComponent } from './loading/loading.component';
import {FormsModule} from '@angular/forms';
import {ApiNavbarService} from '../shared/api/api-navbar.service';
import {ApiLogWriteService} from "../shared/api/api-log-write.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  exports: [
    NavbarComponent,
    MainComponent
  ],
  declarations: [
    NavbarComponent,
    MainComponent,
    ErrorPageComponent,
    SignInComponent,
    SafeHtmlPipe,
    LoadingComponent
  ],
  providers: [
    ApiUserProfileService,
    SignInGuardService,
    MicrosoftAuthService,
    GoogleAuthService,
    ApiNavbarService,
    ApiLogWriteService
  ]
})
export class CoreModule { }
