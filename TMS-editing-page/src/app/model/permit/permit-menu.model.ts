import { MenuModel } from "../menu.model";
import { MenuPermissionModel } from "../menu-permission.model";

export class PermitMenuModel {
  menu: MenuModel;
  menu_permission: MenuPermissionModel;

  constructor(
    menu: MenuModel,
    menu_permission: MenuPermissionModel
  ) {
    this.menu = menu;
    this.menu_permission = menu_permission;
  }
}
