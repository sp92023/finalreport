import { SymptomReferenceModel } from "../symptom-reference.model";
import { QueryGenderModel } from "./query-gender.model";
import { QueryBodyModel } from "./query-body.model";
import { QueryDepartmentModel } from "./query-department.model";
import { QueryDurationModel } from "./query-duration.model";
import { QuerySeverityModel } from "./query-severity.model";
import { QueryHospitalPermissionModel } from "./query-hospital-permission.model";
import { BranchModel } from "../branch.model";

export class QueryResponseModel {
  symptom: SymptomReferenceModel[];
  gender: QueryGenderModel;
  body: QueryBodyModel;
  department: QueryDepartmentModel;
  duration: QueryDurationModel;
  severity: QuerySeverityModel;
  hospital_permission: QueryHospitalPermissionModel[];
  branch: BranchModel[];

  constructor(
    symptom: SymptomReferenceModel[],
    gender: QueryGenderModel,
    body: QueryBodyModel,
    department: QueryDepartmentModel,
    duration: QueryDurationModel,
    severity: QuerySeverityModel,
    hospital_permission: QueryHospitalPermissionModel[],
    branch: BranchModel[]
  ) {
    this.symptom = symptom;
    this.gender = gender;
    this.body = body;
    this.department = department;
    this.duration = duration;
    this.severity = severity;
    this.hospital_permission = hospital_permission;
    this.branch = branch;
  }
}
