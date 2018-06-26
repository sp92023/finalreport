import { CuiModel } from "../cui.model";
import { TermModel } from "../term.model";

export class DashboardSymptomModel {
  symptom_id: number;
  cui: CuiModel;
  snomed: TermModel;
  hospitals: string[];

  constructor(
    symptom_id: number,
    cui: CuiModel,
    snomed: TermModel,
    hospitals: string[]
  ) {
    this.symptom_id = symptom_id;
    this.cui = cui;
    this.snomed = snomed;
    this.hospitals = hospitals;
  }
}
