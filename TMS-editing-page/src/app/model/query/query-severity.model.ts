import { SeverityReferenceModel } from "../severity-reference.model";
import { SeverityModel } from "../severity.model";

export class QuerySeverityModel {
  symptoms: SeverityReferenceModel[];
  severitys: SeverityModel[];

  constructor(
    symptoms: SeverityReferenceModel[],
    severitys: SeverityModel[]
  ) {
    this.symptoms = symptoms;
    this.severitys = severitys;
  }
}
