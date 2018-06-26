import { BodyModel } from "../body.model";

export class DashboardBodyModel {
  body: BodyModel;
  hospitals: string[];

  constructor(
    body: BodyModel,
    hospitals: string[]
  ) {
    this.body = body;
    this.hospitals = hospitals;
  }
}
