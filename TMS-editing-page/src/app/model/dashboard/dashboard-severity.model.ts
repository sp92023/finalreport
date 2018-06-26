import { SeverityModel } from "../severity.model";

export class DashboardSeverityModel {
  severity: SeverityModel;
  hospitals: string[];

  constructor(
    severity: SeverityModel,
    hospitals: string[]
  ) {
    this.severity = severity;
    this.hospitals = hospitals;
  }
}
