import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './core/main/main.component';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { SymptomEditingComponent } from './editings/symptom-editing/symptom-editing.component';
import { SignInGuardService } from './shared/sign-in-guard.service';
import { HospitalDashboardComponent } from './dashboards/hospital-dashboard/hospital-dashboard.component';
import { SymptomDashboardComponent } from './dashboards/symptom-dashboard/symptom-dashboard.component';
import { SeverityEditingComponent } from './editings/severity-editing/severity-editing.component';
import { HospitalEditingComponent } from './editings/hospital-editing/hospital-editing.component';
import { GenderEditingComponent } from './editings/gender-editing/gender-editing.component';
import { DurationEditingComponent } from './editings/duration-editing/duration-editing.component';
import {BodyEditingComponent} from "./editings/body-editing/body-editing.component";
import {DepartmentEditingComponent} from "./editings/department-editing/department-editing.component";

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [SignInGuardService] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'error-page', component: ErrorPageComponent },
  { path: 'editing',
    children: [
      { path: 'symptom', component: SymptomEditingComponent, canActivate: [SignInGuardService] },
      { path: 'duration', component: DurationEditingComponent, canActivate: [SignInGuardService] },
      { path: 'gender', component: GenderEditingComponent, canActivate: [SignInGuardService] },
      { path: 'hospital', component: HospitalEditingComponent, canActivate: [SignInGuardService] },
      { path: 'severity', component: SeverityEditingComponent, canActivate: [SignInGuardService] },
      { path: 'body', component: BodyEditingComponent, canActivate: [SignInGuardService] },
      { path: 'department', component: DepartmentEditingComponent, canActivate: [SignInGuardService] }
    ]
  },
  { path: 'dashboard',
    children: [
      { path: 'hospital', component: HospitalDashboardComponent, canActivate: [SignInGuardService] },
      { path: 'symptom', component: SymptomDashboardComponent, canActivate: [SignInGuardService] }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
