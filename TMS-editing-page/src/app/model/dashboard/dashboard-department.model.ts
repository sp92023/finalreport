import { DepartmentModel } from "../department.model";

export class DashboardDepartmentModel {
  department: DepartmentModel;
  hospitals: string[];

  constructor(
    department: DepartmentModel,
    hospitals: string[]
  ) {
    this.department = department;
    this.hospitals = hospitals;
  }
}
