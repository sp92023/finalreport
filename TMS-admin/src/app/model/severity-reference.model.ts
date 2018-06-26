import { CuiModel } from "./cui.model";

export class SeverityReferenceModel {
  symptom_id: number;
  cui: CuiModel;
  severity_id: number;
  severity_reference_id: number;

  constructor(
    symptom_id: number,
    cui: CuiModel,
    severity_id: number,
    severity_reference_id: number
  ) {
    this.symptom_id = symptom_id;
    this.cui = cui;
    this.severity_id = severity_id;
    this.severity_reference_id = severity_reference_id;
  }
}
