import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatNativeDateModule } from "@angular/material";

import { SignInComponent } from './sign-in/sign-in.component';
import { MainComponent } from "./main/main.component";
import { ErrorPageComponent } from './error-page/error-page.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MaterialModule } from '../shared/material.module';
import { DialogComponent } from './dialog/dialog.component';
import { SideNavMinComponent } from './side-nav-min/side-nav-min.component';


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
  exports: [
    SideNavComponent,
    ToolBarComponent,
    DialogComponent,
    SideNavMinComponent
  ],
  declarations: [
    SignInComponent,
    MainComponent,
    ErrorPageComponent,
    SideNavComponent,
    ToolBarComponent,
    DialogComponent,
    SideNavMinComponent
  ],
  entryComponents: [
    DialogComponent
  ]
})
export class CoreModule { }
