import { Component, OnInit } from '@angular/core';

import { MicrosoftAuthService } from './shared/microsoft-auth.service';
import { ApiLogWriteService } from "./shared/api/api-log-write.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor(
    private microsoftAuthService: MicrosoftAuthService
  ) {
  }

  ngOnInit() {
    this.microsoftAuthService.initAuth(); // init for microsoft auth
  }
}
