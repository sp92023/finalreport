import { HospitalModel } from "../hospital.model";
import { HospitalPermissionModel } from "../hospital-permission.model";

export class PermitHospitalModel {
  hospital: HospitalModel;
  hospital_permission: HospitalPermissionModel;

  constructor(
    hospital: HospitalModel,
    hospital_permission: HospitalPermissionModel
  ) {
    this.hospital = hospital;
    this.hospital_permission = hospital_permission;
  }
}
