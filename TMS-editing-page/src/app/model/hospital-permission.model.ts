export class HospitalPermissionModel {
  hospital_permission_id: number;
  account_id: number;
  hospital_id: number;
  hospital_permission_level: string;

  constructor(
    hospital_permission_id: number,
    account_id: number,
    hospital_id: number,
    hospital_permission_level: string
  ) {
    this.hospital_permission_id = hospital_permission_id;
    this.account_id = account_id;
    this.hospital_id = hospital_id;
    this.hospital_permission_level = hospital_permission_level;
  }
}
