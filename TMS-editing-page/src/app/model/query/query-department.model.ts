import { DepartmentReferenceModel } from "../department-reference.model";
import { DepartmentModel } from "../department.model";

export class QueryDepartmentModel {
  symptoms: DepartmentReferenceModel[];
  departments: DepartmentModel[];

  constructor(
    symptoms: DepartmentReferenceModel[],
    departments: DepartmentModel[]
  ) {
    this.symptoms = symptoms;
    this.departments = departments;
  }
}
