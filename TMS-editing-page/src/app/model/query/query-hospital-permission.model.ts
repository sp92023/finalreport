import { AccountModel } from "../account.model";
import { HospitalPermissionModel } from "../hospital-permission.model";

export class QueryHospitalPermissionModel {
  hospital_permission: HospitalPermissionModel[];
  account: AccountModel[];

  constructor(
    hospital_permission: HospitalPermissionModel[],
    account: AccountModel[]
  ) {
    this.hospital_permission = hospital_permission;
    this.account = account;
  }
}
