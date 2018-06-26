import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  smallScreen = false; // screen is less than 768 px
  sideNavType = true;

  constructor() {
    // if screen is less than 768 px
    // that side bar menu always close
    if (window.innerWidth < 768) {
      this.smallScreen = true;
      this.sideNavType = false;
    }
  }

  changeSideNavType() {
    if (!this.smallScreen) {
      this.sideNavType = !this.sideNavType;
    } else {
      this.sideNavType = false;
    }
  }


}
