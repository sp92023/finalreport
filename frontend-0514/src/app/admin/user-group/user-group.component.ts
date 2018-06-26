import { Component, OnInit } from '@angular/core';
import {ApiUserListService} from "../../shared/api/api-user-list.service";
import {Subscription} from "rxjs/Subscription";
import {UserForAdminModel} from "../../model/admin/user-for-admin.model";
import {ApiUsergroupListService} from "../../shared/api/api-usergroup-list.service";
import {UserGroupModel} from "../../model/admin/user-group.model";
import {ApiUsergroupUpdateService} from "../../shared/api/api-usergroup-update.service";
import {ApiLogWriteService} from "../../shared/api/api-log-write.service";

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {

  private subsUserList: Subscription;
  private subsUsergroupList: Subscription;
  private subsUsergroupUpdate: Subscription;
  private users: UserForAdminModel[];
  private chooseValue: UserForAdminModel;
  private usergroup: UserGroupModel[] = [];

  constructor(
    private apiUserListService: ApiUserListService,
    private apiUsergroupListService: ApiUsergroupListService,
    private apiUsergroupUpdateService: ApiUsergroupUpdateService,
    private apiLogWriteService: ApiLogWriteService
  ) {
    this.apiLogWriteService.writeLog('UserGroupComponent | Work');
  }

  ngOnInit() {
    this.subsUserList = this.apiUserListService.userList()
      .subscribe(
        data => {
          this.users = <UserForAdminModel[]>data;
        }
    )
  }

  submit() {
    this.apiLogWriteService.writeLog('UserGroupComponent | Submit');
    this.subsUsergroupList = this.apiUsergroupListService.usergroupList(this.chooseValue)
      .subscribe(
        data => {
          this.usergroup = <UserGroupModel[]>data;
        }
      )
  }

  save() {
    this.apiLogWriteService.writeLog('UserGroupComponent | Save');
    this.subsUsergroupUpdate = this.apiUsergroupUpdateService.usergroupUpdate(this.usergroup)
      .subscribe(
        data => {
        }
      )
  }
}
