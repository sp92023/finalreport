import { DurationModel } from "../duration.model";

export class DashboardDurationModel {
  duration: DurationModel;
  hospitals: string[];

  constructor(
    duration: DurationModel,
    hospitals: string[]
  ) {
    this.duration = duration;
    this.hospitals = hospitals;
  }
}
