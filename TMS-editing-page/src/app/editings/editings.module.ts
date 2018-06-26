import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatNativeDateModule } from "@angular/material";

import { SymptomEditingComponent } from './symptom-editing/symptom-editing.component';
import { MaterialModule } from '../shared/material.module';
import { DurationEditingComponent } from './duration-editing/duration-editing.component';
import { SeverityEditingComponent } from './severity-editing/severity-editing.component';
import { HospitalEditingComponent } from './hospital-editing/hospital-editing.component';
import { GenderEditingComponent } from './gender-editing/gender-editing.component';
import { BodyEditingComponent } from './body-editing/body-editing.component';
import { DepartmentEditingComponent } from './department-editing/department-editing.component';
import { BodyEditingDialogComponent } from './body-editing/body-editing-dialog/body-editing-dialog.component';
import { DepartmentEditingDialogComponent } from './department-editing/department-editing-dialog/department-editing-dialog.component';
import { DurationEditingDialogComponent } from './duration-editing/duration-editing-dialog/duration-editing-dialog.component';
import { GenderEditingDialogComponent } from './gender-editing/gender-editing-dialog/gender-editing-dialog.component';
import { HospitalEditingDialogComponent } from './hospital-editing/hospital-editing-dialog/hospital-editing-dialog.component';
import { SeverityEditingDialogComponent } from './severity-editing/severity-editing-dialog/severity-editing-dialog.component';
import { SymptomEditingDialogComponent } from './symptom-editing/symptom-editing-dialog/symptom-editing-dialog.component';

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
    SymptomEditingComponent,
    DurationEditingComponent,
    SeverityEditingComponent,
    HospitalEditingComponent,
    GenderEditingComponent,
    BodyEditingComponent,
    DepartmentEditingComponent,
    BodyEditingDialogComponent,
    DepartmentEditingDialogComponent,
    DurationEditingDialogComponent,
    GenderEditingDialogComponent,
    HospitalEditingDialogComponent,
    SeverityEditingDialogComponent,
    SymptomEditingDialogComponent
  ],
  entryComponents: [
    BodyEditingDialogComponent,
    DepartmentEditingDialogComponent,
    DurationEditingDialogComponent,
    GenderEditingDialogComponent,
    HospitalEditingDialogComponent,
    SeverityEditingDialogComponent,
    SymptomEditingDialogComponent
  ]
})
export class EditingsModule { }
