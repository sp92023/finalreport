import { DashboardSymptomModel } from "./dashboard-symptom.model";
import { DashboardTermModel } from "./dashboard-term.model";
import { DashboardGenderModel } from "./dashboard-gender.model";
import { DashboardBodyModel } from "./dashboard-body.model";
import { DashboardDepartmentModel } from "./dashboard-department.model";
import { DashboardDurationModel } from "./dashboard-duration.model";
import { DashboardSeverityModel } from "./dashboard-severity.model";

export class DashboardResponseModel {
  symptom_column: DashboardSymptomModel[];
  term_column: DashboardTermModel[];
  gender_column: DashboardGenderModel[];
  body_column: DashboardBodyModel[];
  department_column: DashboardDepartmentModel[];
  duration_column: DashboardDurationModel[];
  severity_column: DashboardSeverityModel[];

  constructor(
    symptom_column: DashboardSymptomModel[],
    term_column: DashboardTermModel[],
    gender_column: DashboardGenderModel[],
    body_column: DashboardBodyModel[],
    department_column: DashboardDepartmentModel[],
    duration_column: DashboardDurationModel[],
    severity_column: DashboardSeverityModel[]
  ) {
    this.symptom_column = symptom_column;
    this.gender_column = gender_column;
    this.term_column = term_column;
    this.body_column = body_column;
    this.department_column = department_column;
    this.severity_column = severity_column;
    this.duration_column = duration_column;
  }
}
