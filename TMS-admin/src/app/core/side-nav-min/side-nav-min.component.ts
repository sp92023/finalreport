import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-nav-min',
  templateUrl: './side-nav-min.component.html',
  styleUrls: ['./side-nav-min.component.css']
})
export class SideNavMinComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goRouterNavigate(commands: string): void {
    this.router.navigate([commands]);
  }

}
