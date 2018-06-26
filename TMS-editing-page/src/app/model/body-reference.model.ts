import { CuiModel } from "./cui.model";
import { BodyModel } from "./body.model";

export class BodyReferenceModel {
  symptom_id: number;
  cui: CuiModel;
  body_id: number;
  body_reference_ids: number[];
  body_variants: BodyModel[];

  constructor(
    symptom_id: number,
    cui: CuiModel,
    body_id: number,
    body_reference_ids: number[],
    body_variants: BodyModel[]
  ) {
    this.symptom_id = symptom_id;
    this.cui = cui;
    this.body_id = body_id;
    this.body_reference_ids = body_reference_ids;
    this.body_variants = body_variants;
  }
}
