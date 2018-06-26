import { CuiModel } from "./cui.model";
import { TermModel } from "./term.model";

export class SymptomReferenceModel {
  symptom_id: number;
  cui: CuiModel;
  snomed: TermModel;
  terms: TermModel[];

  constructor(
    symptom_id: number,
    cui: CuiModel,
    snomed: TermModel,
    terms: TermModel[]
  ) {
    this.symptom_id = symptom_id;
    this.cui = cui;
    this.snomed = snomed;
    this.terms = terms;
  }
}
