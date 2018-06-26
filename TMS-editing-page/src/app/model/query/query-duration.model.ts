import { DurationReferenceModel } from "../duration-reference.model";
import { DurationModel } from "../duration.model";

export class QueryDurationModel {
  symptoms: DurationReferenceModel[];
  durations: DurationModel[];

  constructor(
    symptoms: DurationReferenceModel[],
    durations: DurationModel[]
  ) {
    this.symptoms = symptoms;
    this.durations = durations;
  }
}
