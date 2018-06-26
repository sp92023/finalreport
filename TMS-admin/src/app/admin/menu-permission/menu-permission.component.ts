import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-permission',
  templateUrl: './menu-permission.component.html',
  styleUrls: ['./menu-permission.component.css']
})
export class MenuPermissionComponent implements OnInit {

  hospitals = ['General data', '萬芳醫院', '馬偕醫院', '三軍總醫院'];
  authoritys = ['read & write', 'read only', 'none'];

  constructor() { }

  ngOnInit() {
  }

}
