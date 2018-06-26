import { GenderReferenceModel } from "../gender-reference.model";
import { GenderModel } from "../gender.model";

export class QueryGenderModel {
  symptoms: GenderReferenceModel[];
  genders: GenderModel[];

  constructor(
    symptoms: GenderReferenceModel[],
    genders: GenderModel[]
  ) {
    this.symptoms = symptoms;
    this.genders = genders;
  }
}
