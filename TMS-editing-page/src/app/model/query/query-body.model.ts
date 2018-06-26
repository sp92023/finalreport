import { BodyReferenceModel } from "../body-reference.model";
import { BodyModel } from "../body.model";

export class QueryBodyModel {
  symptoms: BodyReferenceModel[];
  bodies: BodyModel[];

  constructor(
    symptoms: BodyReferenceModel[],
    bodies: BodyModel[]
  ) {
    this.symptoms = symptoms;
    this.bodies = bodies;
  }
}
