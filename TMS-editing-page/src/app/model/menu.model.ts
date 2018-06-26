export class MenuModel {
  menu_id: number;
  menu_name: string;
  menu_router: string;
  menu_icon: string;

  constructor(
    menu_id: number,
    menu_name: string,
    menu_router: string,
    menu_icon: string
  ) {
    this.menu_id = menu_id;
    this.menu_name = menu_name;
    this.menu_router = menu_router;
    this.menu_icon = menu_icon;
  }
}
