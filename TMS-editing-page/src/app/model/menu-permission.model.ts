export class MenuPermissionModel {
  menu_permission_id: number;
  account_id: number;
  menu_id: number;
  menu_permission_level: string;

  constructor(
    menu_permission_id: number,
    account_id: number,
    menu_id: number,
    menu_permission_level: string
  ) {
    this.menu_permission_id = menu_permission_id;
    this.account_id = account_id;
    this.menu_id = menu_id;
    this.menu_permission_level = menu_permission_level;
  }
}
