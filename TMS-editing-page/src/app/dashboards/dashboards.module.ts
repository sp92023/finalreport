import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatNativeDateModule } from "@angular/material";

import { HospitalDashboardComponent } from './hospital-dashboard/hospital-dashboard.component';
import { SymptomDashboardComponent } from './symptom-dashboard/symptom-dashboard.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    DataTablesModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule
  ],
  declarations: [
    HospitalDashboardComponent,
    SymptomDashboardComponent
  ]
})
export class DashboardsModule { }
