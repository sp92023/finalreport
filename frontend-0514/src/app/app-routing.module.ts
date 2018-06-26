import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './core/main/main.component';
import { ProjectControllerComponent } from './test-project/project-controller/project-controller.component';
import { AddDeviceComponent } from './test-unit/add-device/add-device.component';
import { ModifyDeviceComponent } from './test-unit/modify-device/modify-device.component';
import { TransferDeviceComponent } from './test-unit/transfer-device/transfer-device.component';
import { SearchDeviceComponent } from './test-unit/search-device/search-device.component';
import { MmhDashboardComponent } from './test-project/mmh/mmh-dashboard/mmh-dashboard.component';
import { ClockInComponent } from './clock-in/clock-in.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { RoomCalendarComponent } from './booking-room/room-calendar/room-calendar.component';
import { SignInGuardService } from './shared/sign-in-guard.service';
import { LoadingComponent } from './core/loading/loading.component';
import { ClockListComponent } from './admin/clock-list/clock-list.component';
import {TestCoverageComponent} from "./tools/test-coverage/test-coverage.component";
import {MmhQrcodeComponent} from "./test-project/mmh/mmh-qrcode/mmh-qrcode.component";
import {UserGroupComponent} from "./admin/user-group/user-group.component";
import {LogComponent} from "./admin/log/log.component";
import {HcQrcodeComponent} from "./test-project/hc/hc-qrcode/hc-qrcode.component";

const appRoutes: Routes = [
  {
    path: '', component: MainComponent, canActivate: [SignInGuardService]
  },
  {
    path: 'booking-room', component: RoomCalendarComponent, canActivate: [SignInGuardService]
  },
  {
    path: 'test-project',
    children: [
      { path: 'project-controller', component: ProjectControllerComponent, canActivate: [SignInGuardService] },
      { path: 'mmh',
        children: [
          { path: 'dashboard', component: MmhDashboardComponent, canActivate: [SignInGuardService] },
          { path: 'qrcode', component: MmhQrcodeComponent, canActivate: [SignInGuardService] }
        ]
      },
      { path: 'hc',
        children: [
          { path: 'qrcode', component: HcQrcodeComponent, canActivate: [SignInGuardService] }
        ]
      }
    ]
  },
  {
    path: 'test-unit',
    children: [
      { path: 'add-device', component: AddDeviceComponent, canActivate: [SignInGuardService] },
      { path: 'modify-device/:value', component: ModifyDeviceComponent, canActivate: [SignInGuardService] },
      { path: 'transfer-device/:value', component: TransferDeviceComponent, canActivate: [SignInGuardService] },
      { path: 'search-device', component: SearchDeviceComponent, canActivate: [SignInGuardService] },
      { path: 'search-device/:value', component: SearchDeviceComponent, canActivate: [SignInGuardService] }
    ]
  },
  {
    path: 'admin',
    children: [
      { path: 'clock-list', component: ClockListComponent, canActivate: [SignInGuardService] },
      { path: 'user-group', component: UserGroupComponent, canActivate: [SignInGuardService] },
      { path: 'log', component: LogComponent, canActivate: [SignInGuardService] }
    ]
  },
  {
    path: 'clock-in', component: ClockInComponent, canActivate: [SignInGuardService]
  },
  {
    path: 'error-page', component: ErrorPageComponent
  },
  {
    path: 'sign-in', component: SignInComponent
  },
  {
    path: 'loading', component: LoadingComponent
  },
  {
    path: 'tools',
    children: [
      { path: 'test-coverage', component: TestCoverageComponent, canActivate: [SignInGuardService] }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
