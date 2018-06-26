import { CuiModel } from "./cui.model";

export class DurationReferenceModel {
  symptom_id: number;
  cui: CuiModel;
  duration_id: number;
  duration_reference_id: number;

  constructor(
    symptom_id: number,
    cui: CuiModel,
    duration_id: number,
    duration_reference_id: number
  ) {
    this.symptom_id = symptom_id;
    this.cui = cui;
    this.duration_id = duration_id;
    this.duration_reference_id = duration_reference_id;
  }
}
