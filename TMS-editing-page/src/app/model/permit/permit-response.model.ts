import { PermitHospitalModel } from "./permit-hospital.model";
import { PermitMenuModel } from "./permit-menu.model";

export class PermitResponseModel {
  hospital: PermitHospitalModel;
  menu: PermitMenuModel;

  constructor(
    hospital: PermitHospitalModel,
    menu: PermitMenuModel
  ) {
    this.hospital = hospital;
    this.menu = menu;
  }
}
