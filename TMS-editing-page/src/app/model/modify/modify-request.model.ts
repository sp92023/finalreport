import { HospitalModel } from '../hospital.model';
import { GenderModel } from '../gender.model';
import { DurationModel } from '../duration.model';
import { SeverityModel } from '../severity.model';
import { SymptomReferenceModel } from '../symptom-reference.model';
import { GenderReferenceModel } from "../gender-reference.model";
import { BodyReferenceModel } from "../body-reference.model";
import { DepartmentReferenceModel } from "../department-reference.model";
import { DurationReferenceModel } from "../duration-reference.model";
import { SeverityReferenceModel } from "../severity-reference.model";
import { HospitalPermissionModel } from "../hospital-permission.model";
import { MenuPermissionModel } from "../menu-permission.model";

export class ModifyRequestModel {
  item: string;
  option: string;
  hospital: HospitalModel;
  symptom: SymptomReferenceModel;
  gender: GenderReferenceModel;
  body: BodyReferenceModel;
  department: DepartmentReferenceModel;
  duration: DurationReferenceModel;
  severity: SeverityReferenceModel;
  gender_option: GenderModel;
  duration_option: DurationModel;
  severity_option: SeverityModel;
  hospital_permission: HospitalPermissionModel;
  menu_permission: MenuPermissionModel;

  constructor(
    item: string,
    option: string,
    hospital: HospitalModel,
    symptom: SymptomReferenceModel,
    gender: GenderReferenceModel,
    body: BodyReferenceModel,
    department: DepartmentReferenceModel,
    duration: DurationReferenceModel,
    severity: SeverityReferenceModel,
    gender_option: GenderModel,
    duration_option: DurationModel,
    severity_option: SeverityModel,
    hospital_permission: HospitalPermissionModel,
    menu_permission: MenuPermissionModel
  ) {
    this.item = item;
    this.option = option;
    this.hospital = hospital;
    this.symptom = symptom;
    this.gender = gender;
    this.body = body;
    this.department = department;
    this.duration = duration;
    this.severity = severity;
    this.gender_option = gender_option;
    this.duration_option = duration_option;
    this.severity_option = severity_option;
    this.hospital_permission = hospital_permission;
    this.menu_permission = menu_permission;
  }
}
