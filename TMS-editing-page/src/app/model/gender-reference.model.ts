import { CuiModel } from "./cui.model";

export class GenderReferenceModel {
  symptom_id: number;
  cui: CuiModel;
  gender_id: number;
  gender_reference_id: number;

  constructor(
    symptom_id: number,
    cui: CuiModel,
    gender_id: number,
    gender_reference_id: number
  ) {
    this.symptom_id = symptom_id;
    this.cui = cui;
    this.gender_id = gender_id;
    this.gender_reference_id = gender_reference_id;
  }
}
