import { HospitalModel } from '../hospital.model';
import { GenderModel } from '../gender.model';
import { DurationModel } from '../duration.model';
import { SeverityModel } from '../severity.model';
import { BranchModel } from "../branch.model";
import { CuiModel } from "../cui.model";
import { BodyModel } from "../body.model";
import { DepartmentModel } from "../department.model";
import { MenuModel } from "../menu.model";

export class CreateRequestModel {
  item: string;
  hospital: HospitalModel;
  branch: BranchModel;
  symptom: CuiModel;
  body: BodyModel;
  department: DepartmentModel;
  gender_option: GenderModel;
  duration_option: DurationModel;
  severity_option: SeverityModel;
  menu: MenuModel;

  constructor(
    item: string,
    hospital: HospitalModel,
    branch: BranchModel,
    symptom: CuiModel,
    body: BodyModel,
    department: DepartmentModel,
    gender_option: GenderModel,
    duration_option: DurationModel,
    severity_option: SeverityModel,
    menu: MenuModel
  ) {
    this.item = item;
    this.hospital = hospital;
    this.symptom = symptom;
    this.branch = branch;
    this.body = body;
    this.department = department;
    this.gender_option = gender_option;
    this.duration_option = duration_option;
    this.severity_option = severity_option;
    this.menu = menu;
  }
}
