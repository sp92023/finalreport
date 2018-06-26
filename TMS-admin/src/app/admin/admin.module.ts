import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalPermissionComponent } from './hospital-permission/hospital-permission.component';
import { MenuPermissionComponent } from './menu-permission/menu-permission.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "../shared/material.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule
  ],
  declarations: [HospitalPermissionComponent, MenuPermissionComponent]
})
export class AdminModule { }
